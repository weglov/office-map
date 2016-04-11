var React = require('react');
var Float5 = require('./float5');
var Zoom = require('./zoom');
var ActionZoom = require('./actions/zoom');
var Config = require('.././config');

module.exports = React.createClass({
  getInitialState:  function() {
      return {
        transX: 0,
        transY: 0,
        scale: 1,
        zoomStep: 1,
        zoomMaxStep: 4,
        zoomCurStep: 1,
      }
  },
  // applyTransform: function () {
  //   console.log(this);
  // var maxTransX, maxTransY, minTransX, minTransY;
  // if (this.defaultWidth * this.scale <= this.width) {
  //   maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
  //   minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
  // } else {
  //   maxTransX = 0;
  //   minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
  // }
  //
  // if (this.defaultHeight * this.scale <= this.height) {
  //   maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
  //   minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
  // } else {
  //   maxTransY = 0;
  //   minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
  // }
  //
  // if (this.transY > maxTransY) {
  //   this.transY = maxTransY;
  // } else if (this.transY < minTransY) {
  //   this.transY = minTransY;
  // }
  // if (this.transX > maxTransX) {
  //   this.transX = maxTransX;
  // } else if (this.transX < minTransX) {
  //   this.transX = minTransX;
  // }
  //
  // },
  // mouseMove: function() {
  //   var mouseDown = false;
  //   var oldPageX, oldPageY;
  //   var self = this.state;
  //   var states = this;
  //   self.isMoving = false;
  //   self.isMovingTimeout = false;
  //   var lastTouchCount;
  //   var touchCenterX;
  //   var touchCenterY;
  //   var touchStartDistance;
  //   var touchStartScale;
  //   var touchX;
  //   var touchY;
  //   $('#map').mousemove(function (e) {
  //     if (mouseDown) {
  //       self.transX -= (oldPageX - e.pageX) / self.scale;
  //       self.transY -= (oldPageY - e.pageY) / self.scale;
  //       states.applyTransform();
  //
  //       oldPageX = e.pageX;
  //       oldPageY = e.pageY;
  //
  //       self.isMoving = true;
  //       if (self.isMovingTimeout) {
  //         clearTimeout(self.isMovingTimeout);
  //       }
  //
  //       self.container.trigger('drag');
  //     }
  //
  //     return false;
  //
  //   }).mousedown(function (e) {
  //
  //     mouseDown = true;
  //     oldPageX = e.pageX;
  //     oldPageY = e.pageY;
  //
  //     return false;
  //
  //   }).mouseup(function () {
  //
  //     mouseDown = false;
  //
  //     clearTimeout(self.isMovingTimeout);
  //     self.isMovingTimeout = setTimeout(function () {
  //       self.isMoving = false;
  //     }, 100);
  //
  //     return false;
  //
  //   }).mouseout(function () {
  //
  //     if(mouseDown && self.isMoving){
  //
  //       clearTimeout(self.isMovingTimeout);
  //       self.isMovingTimeout = setTimeout(function () {
  //         mouseDown = false;
  //         self.isMoving = false;
  //       }, 100);
  //
  //       return false;
  //     }
  //   })
  // },
  componentDidMount: function() {
    $("polygon").mouseenter(function() {
      $(this).attr("fill", "#F5841F");
    });
    $("polygon").mouseleave(function() {
      $(this).attr("fill", "transparent");
    });
    ActionZoom;
    var $pep = $('.zoom').pep();
    $pep.pep({ debug: true, useCSSTranslation: false });
  },
  render: function() {
    return (
      <div id="map">
        <Zoom />
        <svg viewBox="0 0 1440 600">
          <Float5 />
        </svg>
      </div>
    )
  }
})
