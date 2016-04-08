var React = require('react');
var Float5 = require('./float5');
var Zoom = require('./zoom');
var Config = require('.././config');

module.exports = React.createClass({
  getDefaultProps:  function() {
      return {
        transX: 0,
        transY: 0,
        scale: 1,
        mapData: {
          width: $("#map .zoom").width(),
          height: $("#map .zoom").height()
        }
      }
  },
  mouseMove: function() {
    var mouseDown = false;
    var self = this.props;
    $('#map').mousemove(function (e) {
      if (mouseDown) {
        self.transX -= (oldPageX - e.pageX) / self.scale;
        self.transY -= (oldPageY - e.pageY) / self.scale;
        console.log(self);
        self.applyTransform();

        oldPageX = e.pageX;
        oldPageY = e.pageY;

        self.isMoving = true;
        if (self.isMovingTimeout) {
          clearTimeout(self.isMovingTimeout);
        }

        self.container.trigger('drag');
      }

      return false;

    }).mousedown(function (e) {

      mouseDown = true;
      oldPageX = e.pageX;
      oldPageY = e.pageY;

      return false;

    }).mouseup(function () {

      mouseDown = false;

      clearTimeout(self.isMovingTimeout);
      self.isMovingTimeout = setTimeout(function () {
        self.isMoving = false;
      }, 100);

      return false;

    }).mouseout(function () {

      if(mouseDown && self.isMoving){

        clearTimeout(self.isMovingTimeout);
        self.isMovingTimeout = setTimeout(function () {
          mouseDown = false;
          self.isMoving = false;
        }, 100);

        return false;
      }
    })
  },
  componentDidMount: function() {
    $("polygon").mouseenter(function() {
    $(this).attr("fill", "#F5841F");
    });
    $("polygon").mouseleave(function() {
    $(this).attr("fill", "transparent");
    });
      this.mouseMove();
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
