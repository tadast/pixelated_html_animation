var Logo;
Logo = (function() {
  function Logo(selector) {
    this.elm = document.getElementById('mainLogo');
  }
  Logo.prototype.appear = function() {
    this.elm.style.opacity = 1;
    return this.elm.style.bottom = 0;
  };
  Logo.prototype.dissapear = function() {
    this.elm.style.opacity = 0;
    return this.elm.style.bottom = '50px';
  };
  return Logo;
})();