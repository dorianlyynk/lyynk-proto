(function(){
  // Hauteur : inchangée. La maquette (844 px) tient toujours dans l'écran,
  // boutons du bas visibles, pas de défilement.
  // Largeur : le contenu occupe toute la largeur de l'écran. Si l'écran est court
  // (Safari avec ses barres), l'échelle baisse pour tenir en hauteur et la zone
  // logique s'élargit au-delà de 390 px au lieu de laisser des bandes vides.
  var MIN_W = 390, MIN_H = 844, MAX_W = 600; // MAX_W : garde-fou paysage / ordinateur
  function fit(){
    var w = window.innerWidth, h = window.innerHeight;
    var s = Math.min(w / MIN_W, h / MIN_H);
    var W = Math.min(w / s, MAX_W), H = h / s, x = (w - W * s) / 2;
    var r = document.documentElement.style;
    r.setProperty('--s', s); r.setProperty('--w', W + 'px'); r.setProperty('--h', H + 'px'); r.setProperty('--x', x + 'px');
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function(){ setTimeout(fit, 200); });
  fit();
})();
