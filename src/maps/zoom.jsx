var React = require('react');
var Zoom = require('./controls/zoom');
module.exports = React.createClass({
  componentDidMount: function() {
      $('.controls__zoom--in').click(function() {
        Zoom.zoomIn();
      });
      $('.controls__zoom--out').click(function() {
        Zoom.zoomOut();
      });
  },
  render: function() {
    return (
        <div className="controls">
            <div className="controls__zoom controls__zoom--in">+</div>
            <div className="controls__zoom controls__zoom--out">-</div>
        </div>
    )
  }
})
