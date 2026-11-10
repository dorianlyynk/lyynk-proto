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

  // Resserre un élément du haut d'un facteur k autour du point (W/2, 0), puis le remonte
  // de dy px. clip : hauteur (en px de l'écran) sous laquelle il reste caché, derrière l'en-tête.
  // On passe par scale + translate + clip-path pour ne pas toucher au transform (souvent animé).
  function shrink(el, k, dy, clip){
    var sc = '', tr = '', cp = '';
    if (k < 1 || dy){
      var o = getComputedStyle(el).transformOrigin.split(' ');
      var ox = el.offsetLeft + parseFloat(o[0]) - W / 2;
      var oy = el.offsetTop + parseFloat(o[1]);
      sc = k < 1 ? String(k) : '';
      tr = ((k - 1) * ox).toFixed(2) + 'px ' + ((k - 1) * oy - dy).toFixed(2) + 'px';
      var hide = clip ? (clip - (el.offsetTop * k - dy)) / k : 0;
      if (hide > 0) cp = 'polygon(-60px ' + hide.toFixed(1) + 'px, calc(100% + 60px) ' + hide.toFixed(1) + 'px, calc(100% + 60px) calc(100% + 60px), -60px calc(100% + 60px))';
    }
    var key = sc + '|' + tr + '|' + cp;
    if (el.lyFit === key) return; // déjà appliqué : pas de boucle
    if (el.lyFit === undefined && !sc && !tr && !cp) { el.lyFit = key; return; }
    el.lyFit = key;
    el.style.scale = sc; el.style.translate = tr; el.style.clipPath = cp;
  }

  function layout(box){
    var H = box.clientHeight, tops = [], bottom = H, maxY = 0;
    for (var i = 0; i < box.children.length; i++){
      var el = box.children[i], st = el.style;
      if (st.position !== 'absolute' && getComputedStyle(el).position !== 'absolute') continue;
      var t = isSet(st.top), b = isSet(st.bottom);
      if (t && b){ if (el.offsetHeight >= H - 2) layout(el); continue; } // calque plein écran
      if ((t || b) && isDecor(el, H)){ shrink(el, 1, 0); continue; } // étoiles, lune, colline… : restent en fond
      // Boutons du bas et clavier : jamais réduits, toujours en pleine largeur.
      if (b){ shrink(el, 1, 0); if (el.offsetHeight) bottom = Math.min(bottom, el.offsetTop); continue; }
      if (t){ tops.push(el); maxY = Math.max(maxY, el.offsetTop + el.offsetHeight); }
    }
    // Espace prévu entre le haut et le bas sur la maquette (844 px) : on le garde, sans dépasser GAP.
    var limit = bottom - Math.min(GAP, bottom + 844 - H - maxY);
    var k = 1, dy = 0, head = 0;
    if (maxY > limit){
      k = Math.max(MIN_K, limit / maxY);
      // Encore trop haut (écran très court, clavier ouvert) : le contenu remonte sous l'en-tête,
      // comme une page qu'on fait défiler. L'en-tête (retour, ✕) reste en place.
      dy = Math.max(0, maxY * k - limit);
    }
    for (var j = 0; j < tops.length; j++){
      var e = tops[j];
      if (dy && e.offsetTop + e.offsetHeight <= HEAD) head = Math.max(head, (e.offsetTop + e.offsetHeight) * k);
    }
    for (var n = 0; n < tops.length; n++){
      var isHead = tops[n].offsetTop + tops[n].offsetHeight <= HEAD;
      shrink(tops[n], k, dy && !isHead ? dy : 0, dy && !isHead ? head + 4 : 0);
    }
  }

  function run(){
    raf = 0;
    var host = document.querySelector('#dc-root > .sc-host > div');
    if (host) layout(host);
  }
  function schedule(){ if (!raf) raf = requestAnimationFrame(run); }

  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function(){ setTimeout(fit, 200); });
  fit();

  // Les écrans changent au fil de l'exercice : on recalcule à chaque mise à jour.
  function watch(){
    var root = document.getElementById('dc-root');
    if (!root){ return setTimeout(watch, 50); }
    new MutationObserver(schedule).observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['style'] });
    schedule();
  }
  watch();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
  window.addEventListener('load', schedule);
})();
