var Column;
Column = (function() {
  function Column(position, dotCodes, totalPositions, sceneWidth, size, speed) {
    var dot, dotCode, _i, _len, _ref;
    this.position = position;
    this.dotCodes = dotCodes;
    this.totalPositions = totalPositions;
    this.sceneWidth = sceneWidth;
    this.size = size != null ? size : 4;
    this.speed = speed != null ? speed : 4;
    this.calculatePositions();
    this.domElm = document.createElement('div');
    this.domElm.setAttribute('class', 'slideCol');
    this.domElm.setAttribute('data-col', position);
    this.domElm.style.right = "" + this.right + "px";
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
  Column.prototype.next = function(exitState) {
    if (exitState || !this.reachedDestination()) {
      this.right = Math.min(this.right + this.size * 4, this.destination);
    } else if (!exitState) {
      this.right = this.destination;
    }
    return this.domElm.style.right = "" + this.right + "px";
  };
  Column.prototype.calculatePositions = function() {
    this.initialPosition = -(6 * this.position * this.position) / 6;
    this.destination = this.sceneWidth / 2 + (this.totalPositions / 2 - this.position) * this.size;
    console.log(this.destination);
    return this.right = this.initialPosition;
  };
  Column.prototype.reachedDestination = function() {
    return this.right >= this.destination;
  };
  Column.prototype.reachedEnd = function() {
    return this.right > this.sceneWidth;
  };
  return Column;
})();