(function(){
  // La maquette (390 px de large) occupe toujours toute la largeur du téléphone,
  // et toute la hauteur de l'écran, sans défilement.
  // Si l'écran est trop court (Safari avec ses barres), les boutons du bas gardent
  // leur taille et leur place ; c'est le contenu du haut qui se resserre un peu
  // pour ne jamais passer dessous.
  var W = 390, GAP = 16, MIN_K = 0.62, HEAD = 100, raf = 0;

  function fit(){
    var w = window.innerWidth, h = window.innerHeight;
    var s = w / W;
    var r = document.documentElement.style;
    r.setProperty('--s', s); r.setProperty('--h', (h / s) + 'px'); r.setProperty('--x', '0px');
    schedule();
  }

  // Décor : sans texte, image ni bouton, et minuscule (étoile) ou qui déborde
  // de l'écran (lune, colline, ciel). Il reste en fond, à sa place.
  function isDecor(el, H){
    if (el.textContent.trim() || el.querySelector('img,svg,a,button,canvas') || /^(IMG|SVG|A|BUTTON|CANVAS)$/i.test(el.tagName)) return false;
    var y = el.offsetTop, h = el.offsetHeight;
    return h <= 8 || y < 0 || y + h > H;
  }

  function isSet(v){ return v !== '' && !/^(auto|unset|initial|inherit|revert)$/.test(v); }

  // Remet un élément tel que la page l'a dessiné (on recalcule tout à chaque passage).
  function clean(el){
    if (!el.ly) return;
    if (el.ly.rSet != null && Math.abs(parseFloat(el.style.right) - el.ly.rSet) < 0.2) el.style.right = el.ly.r0; // sinon la page l'a changé elle-même
    el.style.scale = el.style.translate = el.style.clipPath = '';
    el.ly = null;
  }

  // Resserre un élément du haut d'un facteur k sans perdre de largeur :
  // un bloc étiré (left + right) est élargi de 1/k avant d'être réduit, son texte se
  // répartit sur des lignes plus longues et il garde toute la largeur.
  // Les petits éléments (bouton retour, illustration) gardent leur ancrage gauche, droit ou centré.
  // On passe par right + scale + translate + clip-path pour ne pas toucher au transform (souvent animé).
  function widen(el, k){
    var st = el.style;
    if (!el.ly) el.ly = { r0: st.right, L: el.offsetLeft, w: el.offsetWidth, l: isSet(st.left), r: isSet(st.right) };
    if (el.ly.l && el.ly.r){
      el.ly.rSet = Math.round((W - el.ly.L - el.ly.w / k) * 10) / 10;
      st.right = el.ly.rSet + 'px';
    }
  }
  function place(el, k, dy, clip){
    var d = el.ly, T = el.offsetTop, L = el.offsetLeft, w = el.offsetWidth;
    var o = getComputedStyle(el).transformOrigin.split(' ');
    var Ox = L + parseFloat(o[0]), Oy = T + parseFloat(o[1]);
    var centered = Math.abs(d.L + d.w / 2 - W / 2) < 4;
    var left = d.l && d.r ? d.L : centered || (!d.l && !d.r) ? d.L + (d.w - w * k) / 2 : d.r ? d.L + d.w - w * k : d.L;
    var tx = left - Ox - k * (L - Ox), ty = T * k - dy - Oy - k * (T - Oy);
    el.style.scale = String(+k.toFixed(4));
    el.style.translate = tx.toFixed(2) + 'px ' + ty.toFixed(2) + 'px';
    var hide = clip ? (clip - (T * k - dy)) / k : 0;
    el.style.clipPath = hide > 0 ? 'polygon(-60px ' + hide.toFixed(1) + 'px, calc(100% + 60px) ' + hide.toFixed(1) + 'px, calc(100% + 60px) calc(100% + 60px), -60px calc(100% + 60px))' : '';
  }

  function bottomOf(tops){
    var m = 0;
    for (var i = 0; i < tops.length; i++) m = Math.max(m, tops[i].offsetTop + tops[i].offsetHeight);
    return m;
  }

  function layout(box){
    var H = box.clientHeight, tops = [], bottom = H, i;
    for (i = 0; i < box.children.length; i++) clean(box.children[i]);
    for (i = 0; i < box.children.length; i++){
      var el = box.children[i], st = el.style;
      if (st.position !== 'absolute' && getComputedStyle(el).position !== 'absolute') continue;
      var t = isSet(st.top), b = isSet(st.bottom);
      if (t && b){ if (el.offsetHeight >= H - 2) layout(el); continue; } // calque plein écran
      if ((t || b) && isDecor(el, H)) continue; // étoiles, lune, colline… : restent en fond
      // Boutons du bas et clavier : jamais réduits, toujours en pleine largeur.
      if (b){ if (el.offsetHeight) bottom = Math.min(bottom, el.offsetTop); continue; }
      if (t) tops.push(el);
    }
    var maxY = bottomOf(tops);
    // Espace prévu entre le haut et le bas sur la maquette (844 px) : on le garde, sans dépasser GAP.
    var limit = bottom - Math.min(GAP, bottom + 844 - H - maxY);
    if (!tops.length || maxY <= limit) return;

    // On cherche le facteur k : élargir les blocs raccourcit le texte, donc on affine en 3 passes.
    var k = Math.max(MIN_K, limit / maxY), n;
    for (var pass = 0; pass < 3; pass++){
      for (n = 0; n < tops.length; n++) widen(tops[n], k);
      maxY = bottomOf(tops);
      var k2 = Math.min(1, Math.max(MIN_K, limit / maxY));
      if (k2 <= k + 0.005) break;
      k = k2;
    }
    for (n = 0; n < tops.length; n++) widen(tops[n], k);
    maxY = bottomOf(tops);
    if (maxY * k > limit) k = Math.max(MIN_K, limit / maxY);

    // Encore trop haut (écran très court, clavier ouvert) : le contenu remonte sous l'en-tête,
    // comme une page qu'on fait défiler. L'en-tête (retour, ✕) reste en place.
    var dy = Math.max(0, maxY * k - limit), head = 0;
    for (n = 0; n < tops.length; n++){
      var e = tops[n];
      if (e.offsetTop + e.offsetHeight <= HEAD) head = Math.max(head, (e.offsetTop + e.offsetHeight) * k);
    }
    for (n = 0; n < tops.length; n++){
      var isHead = tops[n].offsetTop + tops[n].offsetHeight <= HEAD;
      place(tops[n], k, dy && !isHead ? dy : 0, dy && !isHead ? head + 4 : 0);
    }
  }

  var obs = null;
  function run(){
    raf = 0;
    var host = document.querySelector('#dc-root > .sc-host > div');
    if (!host) return;
    if (obs) obs.disconnect();          // nos propres retouches ne relancent pas le calcul
    layout(host);
    if (obs) observe();
  }
  function schedule(){ if (!raf) raf = requestAnimationFrame(run); }

  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function(){ setTimeout(fit, 200); });
  fit();

  function observe(){
    obs.observe(document.getElementById('dc-root'), { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['style'] });
  }

  // Les écrans changent au fil de l'exercice : on recalcule à chaque mise à jour.
  function watch(){
    var root = document.getElementById('dc-root');
    if (!root){ return setTimeout(watch, 50); }
    obs = new MutationObserver(schedule);
    observe();
    schedule();
  }
  watch();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
  window.addEventListener('load', schedule);
})();
