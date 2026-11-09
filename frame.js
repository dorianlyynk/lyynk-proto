(function(){
  // La maquette (390 px de large) occupe toujours toute la largeur du téléphone,
  // et toute la hauteur de l'écran, sans défilement.
  // Si l'écran est trop court (Safari avec ses barres), les boutons du bas gardent
  // leur taille et leur place ; c'est le contenu du haut qui se resserre un peu
  // pour ne jamais passer dessous.
  var W = 390, GAP = 16, MIN_K = 0.75, raf = 0;

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

  // cy = 0 : resserre vers le haut ; cy = H : resserre vers le bas.
  function shrink(el, k, cy){
    var sc = k < 1 ? String(k) : '', tr = '';
    if (k < 1){
      var o = getComputedStyle(el).transformOrigin.split(' ');
      var ox = el.offsetLeft + parseFloat(o[0]) - W / 2;
      var oy = el.offsetTop + parseFloat(o[1]) - (cy || 0);
      tr = ((k - 1) * ox).toFixed(2) + 'px ' + ((k - 1) * oy).toFixed(2) + 'px';
    }
    if (el.lyFit === sc + '|' + tr) return; // déjà appliqué : pas de boucle
    el.lyFit = sc + '|' + tr;
    el.style.scale = sc; el.style.translate = tr;
  }

  function layout(box){
    var H = box.clientHeight, tops = [], bots = [], bottom = H, maxY = 0;
    for (var i = 0; i < box.children.length; i++){
      var el = box.children[i], st = el.style;
      if (st.position !== 'absolute' && getComputedStyle(el).position !== 'absolute') continue;
      var t = isSet(st.top), b = isSet(st.bottom);
      if (t && b){ if (el.offsetHeight >= H - 2) layout(el); continue; } // calque plein écran
      if ((t || b) && isDecor(el, H)){ shrink(el, 1, 0); continue; } // étoiles, lune, colline… : restent en fond
      if (b){ bots.push(el); if (el.offsetHeight) bottom = Math.min(bottom, el.offsetTop); continue; }
      if (t){ tops.push(el); maxY = Math.max(maxY, el.offsetTop + el.offsetHeight); }
    }
    var kTop = 1, kBot = 1;
    if (maxY > bottom - GAP){
      kTop = (bottom - GAP) / maxY;
      if (kTop < MIN_K){
        // Écran très court (ex. clavier ouvert) : le bas se resserre aussi, vers le bas.
        kTop = kBot = Math.max(kTop, (H - GAP) / (maxY + H - bottom));
      }
    }
    for (var j = 0; j < tops.length; j++) shrink(tops[j], kTop, 0);
    for (var n = 0; n < bots.length; n++) shrink(bots[n], kBot, H);
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
