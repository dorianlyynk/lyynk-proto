(function(){
  // Remplit toute la largeur de l'écran.
  // Si l'écran est assez haut (app en plein écran), la maquette prend toute la hauteur ;
  // sinon (Safari avec ses barres), elle garde sa hauteur d'origine et la page défile.
  function fit(){
    var w = window.innerWidth, h = window.innerHeight;
    var s = w / 390, H = Math.max(h / s, 844);
    var r = document.documentElement.style;
    r.setProperty('--s', s); r.setProperty('--h', H + 'px'); r.setProperty('--ph', (H * s) + 'px');
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function(){ setTimeout(fit, 200); });
  fit();
})();
