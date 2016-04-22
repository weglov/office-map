var React = require('react');
var Api = require('../data/api');
var Config = require('../config');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      elem: [],
      zone: "",
      active: false,
      x: -9999,
      y: -9999,
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
        });
  },
  _hover_text: function() {
    var self = this;
    $("text").hover(function(e) {
      try {
        var id = $(this).attr("id").slice(2);
      } catch (e) {
        var id = 0;
      }
      if (id) {
          $("polygon#zone" + id + ", path#zone" + id).addClass('active');
          $('#way_'+id).addClass('active');
        }
    });
  },
  _hover: function() {
    var self = this;
    var x,y;
    $("polygon, path").hover(function(e) {
      $(this).addClass('active');
      Config.addTooltip();
      try {
         var id = $(this).attr("id").slice(4);
      } catch(e) {
         var id = 0
      }
      var ids = parseInt(id)
      if (ids > 232 && ids < 252) {
        $('#way_9_').addClass('active');
      } else if (ids > 200 && ids < 206 || ids >= 221 && ids <= 222) {
        $('#way_3_').addClass('active');
      } else if (ids >= 215 && ids <= 220 || ids >= 223 && ids <= 227) {
        $('#way_6_').addClass('active');
      } else if (ids >= 332 && ids <= 337) {
        $('#way_332-337').addClass('active');
      } else if (ids >= 332 && ids <= 337) {
        $('#way_332-337').addClass('active');
      }
      else {
        $('#way_'+id).addClass('active');
      }

      var newelem = Api.array(self.state.elem, id);
      if (self.state.zone !== id) {
        self.setState({
            zone: id,
            x: x,
            y: y,
            active: self.state.elem.length ? true : false,
            newelem: Api.array(self.state.elem, id)
        });
      }
    }, function(e) {
      $('polygon.active, path.active').removeClass('active');
      $(this).removeClass('active');
      $('#float_way .active').removeClass('active');
    });
  },
  componentDidUpdate: function() {
    this._hover();
    this._hover_text();
    $('.tooltip').removeClass('tooltip__top');
    $("polygon#zone" + this.state.zone + ", path#zone" + this.state.zone).mousemove(function(e) {
      x = e.offsetX==undefined?e.layerX:e.offsetX;
      y = e.offsetY==undefined?e.layerY:e.offsetY;
      var width = $('.tooltip').width();
      var height = $('.tooltip').height();
      var currentY = y - height - 20;
      var currentX = x - width/2;
      if (currentX == 0 || currentY == 0) {
        currentY = "40px";
        currentX = "20px";
      }
      $('.tooltip').css({
        top: currentY + 'px',
        left: currentX + 'px'
      })
    });
  },
  render: function() {
    var active = false;
    var many = ' tooltip__mini';
    if (this.state.newelem.length) {
      active = true;
      if (this.state.newelem.length > 10) {
        many = ' tooltip__big';
      }
      var zone = this.state.newelem[0].zone;
      var _tooltip = this.state.newelem.map(function(elem) {
        return <div className="tooltip__name"  key={elem.id}>{elem.name}</div>
      });
    }
    return (
      <div className={"tooltip " + active + many}>
        <span className="tooltip__room">{zone}</span>
        {_tooltip}
      </div>
    );
  }
});
