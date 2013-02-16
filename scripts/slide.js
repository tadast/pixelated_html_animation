var Slide;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
Slide = (function() {
  function Slide(elmId, matrix) {
    this.elmId = elmId;
    this.matrix = matrix;
    this.elm = document.getElementById(this.elmId);
    this.cols = [];
    this.pauseLength = 1000;
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
    this.lastFrame = Date.now();
    return requestAnimFrame(__bind(function() {
      return this.advanceFrame();
    }, this));
  };
  Slide.prototype.resume = function() {
    this.pauseDone = true;
    return this.start();
  };
  Slide.prototype.advanceFrame = function() {
    var col, compFactor, resume, _i, _len, _ref;
    compFactor = this.compFactor();
    console.log(compFactor);
    _ref = this.cols;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      col = _ref[_i];
      col.next(this.pauseDone, compFactor);
    }
    if (this.pauseDone) {
      if (this.cols[this.cols.length - 1].reachedEnd()) {
        this.cols = [];
        return console.log("boom");
      } else {
        return requestAnimFrame(__bind(function() {
          return this.advanceFrame();
        }, this));
      }
    } else {
      if (!this.cols[this.cols.length - 1].reachedDestination()) {
        return requestAnimFrame(__bind(function() {
          return this.advanceFrame();
        }, this));
      } else {
        resume = __bind(function() {
          return this.resume();
        }, this);
        return window.setTimeout(resume, this.pauseLength);
      }
    }
  };
  Slide.prototype.compFactor = function() {
    var delta, now;
    now = Date.now();
    delta = now - this.lastFrame;
    this.lastFrame = now;
    return delta / 17;
  };
  return Slide;
})();