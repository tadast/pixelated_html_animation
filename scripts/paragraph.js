var Paragraph;
Paragraph = (function() {
  function Paragraph(selector) {
    this.elm = document.getElementById(selector);
    this.learnWhat = this.elm.getElementsByTagName('em')[0];
  }
  Paragraph.prototype.appear = function() {
    return this.elm.style.opacity = 1;
  };
  Paragraph.prototype.disappear = function() {
    return this.elm.style.opacity = 0;
  };
  Paragraph.prototype.setText = function(text) {
    return this.learnWhat.innerHTML = text;
  };
  return Paragraph;
})();