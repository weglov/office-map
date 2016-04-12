var React = require('react');
var Config = require('../config');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      zoom: 1,
      translate: 0
    }
  },
  zoomIn: function() {
    if (this.state.zoom < Config.zoomMaxStep) {
      this.state.translate = this.state.translate - 12;
      this.state.zoom = this.state.zoom + Config.zoomStep;
      var translateX = this.state.translate;
      var translateY = translateX / 2;
      $('#zoom').css({
                '-webkit-transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)',
                   '-moz-transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)',
                    '-ms-transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)',
                     '-o-transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)',
                        'transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)'
            })
    }
  },
  zoomOut: function() {
    if (this.state.zoom > Config.zoomMinStep) {
      this.state.translate = this.state.translate + 12;
      this.state.zoom = this.state.zoom - Config.zoomStep;
      var translateX = this.state.translate;
      var translateY = translateX / 2;
      $('#zoom').css({
        '-webkit-transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)',
           '-moz-transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)',
            '-ms-transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)',
             '-o-transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)',
                'transform' : 'scale(' + this.state.zoom + ') translate(' + translateX + '%,'+ translateY +'%)'
            })
    }
  },
  componentDidMount: function() {
    var self = this;
    $('#map').on('mousewheel', function(event) {
    if (event.deltaY == 1) {
      self.zoomIn()
    }  else {
      self.zoomOut()
    }
    });
  },
  render: function() {
    return (
        <div className="controls">
            <div className="controls__zoom controls__zoom--in" onClick={this.zoomIn}>+</div>
            <div className="controls__zoom controls__zoom--out" onClick={this.zoomOut}>-</div>
        </div>
    )
  }
})
