var Slide;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
Slide = (function() {
  function Slide(elmId, matrix) {
    this.elmId = elmId;
    this.matrix = matrix;
    this.elm = document.getElementById(this.elmId);
    this.cols = [];
    this.pauseLength = 1000;
    this.animLength = 2000;
    this.init();
  }
  Slide.prototype.init = function() {
    var w, _ref, _results;
    _results = [];
    for (w = 0, _ref = this.matrix.length - 1; 0 <= _ref ? w <= _ref : w >= _ref; 0 <= _ref ? w++ : w--) {
      _results.push(this.addColumn(w));
    }
    return _results;
  };
  Slide.prototype.addColumn = function(position) {
    var col;
    col = new Column(position, this.matrix[position], this.matrix.length, window.innerWidth);
    this.elm.appendChild(col.domElm);
    return this.cols.push(col);
  };
  Slide.prototype.start = function() {
    var enter;
    enter = __bind(function() {
      return this.enter();
    }, this);
    return window.setTimeout(enter, 500);
  };
  Slide.prototype.enter = function() {
    var col, leave, _i, _len, _ref;
    _ref = this.cols;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      col = _ref[_i];
      col.enter();
    }
    leave = __bind(function() {
      return this.leave();
    }, this);
    return window.setTimeout(leave, this.pauseLength + this.animLength);
  };
  Slide.prototype.leave = function() {
    var col, _i, _len, _ref, _results;
    _ref = this.cols;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      col = _ref[_i];
      _results.push(col.leave());
    }
    return _results;
  };
  return Slide;
})();