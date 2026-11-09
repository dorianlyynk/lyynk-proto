(function(){
  // Toujours tout l'écran en hauteur (boutons du bas visibles, pas de défilement).
  // En largeur : pleine largeur, sauf si l'écran est trop court (Safari avec ses barres) :
  // la maquette rétrécit alors un peu pour que rien ne se chevauche.
  var MIN_H = 844;
  function fit(){
    var w = window.innerWidth, h = window.innerHeight;
    var s = Math.min(w / 390, h / MIN_H);
    var H = h / s, x = (w - 390 * s) / 2;
    var r = document.documentElement.style;
    r.setProperty('--s', s); r.setProperty('--h', H + 'px'); r.setProperty('--x', x + 'px');
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function(){ setTimeout(fit, 200); });
  fit();
})();
