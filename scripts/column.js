var Column;
Column = (function() {
  function Column(position, dotCodes, totalPositions, sceneWidth, size, speed) {
    var dot, dotCode, _i, _len, _ref;
    this.position = position;
    this.dotCodes = dotCodes;
    this.totalPositions = totalPositions;
    this.sceneWidth = sceneWidth;
    this.size = size != null ? size : 4;
    this.speed = speed != null ? speed : 3;
    this.calculatePositions();
    this.domElm = document.createElement('div');
    this.domElm.setAttribute('class', 'slideCol');
    this.domElm.setAttribute('data-col', position);
    this.domElm.style.right = "" + this.startPoint + "px";
    _ref = this.dotCodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      dotCode = _ref[_i];
      dot = document.createElement('div');
      dot.setAttribute('class', 'slideDot');
      if (dotCode > 0) {
        dot.className += " full";
      }
      this.domElm.appendChild(dot);
    }
  }
  Column.prototype.enter = function() {
    return this.domElm.style.right = "" + this.middlePoint + "px";
  };
  Column.prototype.leave = function() {
    return this.domElm.style.right = "" + this.finalPoint + "px";
  };
  Column.prototype.calculatePositions = function() {
    var exitPosition;
    this.startPoint = -(6 * this.position * this.position) - this.size;
    this.middlePoint = this.sceneWidth / 2 + (this.totalPositions / 2 - this.position) * this.size;
    exitPosition = this.totalPositions - this.position;
    return this.finalPoint = this.sceneWidth + (6 * exitPosition * exitPosition) + this.size;
  };
  return Column;
})();