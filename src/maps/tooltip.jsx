var React = require('react');
var Api = require('../data/api');
var Config = require('../config');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      elem: [],
      zone: "",
      active: false,
      x: 0,
      y: 0,
      zone: '',
      newelem: []
    }
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
          elem: nextProps.elem,
          zone: nextProps.zone,
          x: this.props.x,
          y: this.props.y,
          active: nextProps.elem.length ? true : false
        });
  },
  componentDidUpdate: function() {
    var self = this;
    $("polygon, path").click(function(e) {
      Config.addTooltip();
      var x = e.offsetX==undefined?e.layerX:e.offsetX;
      var y = e.offsetY==undefined?e.layerY:e.offsetY;
      var id = $(this).attr("id").slice(4);
      var newelem = Api.array(self.state.elem, id);
      if (self.state.zone != id) {
        self.setState({
            x: x,
            y: y,
            newelem: Api.array(self.state.elem, id)
        });
      }
    });
    var width = $('.tooltip').width();
    var height = $('.tooltip').height();
    var currentY = this.state.y - height - 20;
    var currentX = this.state.x - width/2;
    if (this.state.y - height < 0) {
      currentY = this.state.y;
      $('.tooltip').addClass('tooltip__top');
      currentX = this.state.x;
    }
    console.log(height, this.state.y);
    $('.tooltip').css({
      top: currentY + 'px',
      left: currentX + 'px'
    })
  },
  render: function() {
    if (this.state.newelem.length) {
      var zone = this.state.newelem[0].zone;
      var _tooltip = this.state.newelem.map(function(elem) {
        return <div className="tooltip__name"  key={elem.id}>{elem.name}</div>
      });
    }
    return (
      <div className={"tooltip " + this.state.active}>
        <span className="tooltip__room">{zone}</span>
        {_tooltip}
      </div>
    );
  }
});
