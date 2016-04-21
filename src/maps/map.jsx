var React = require('react');
var Float = require('./floats/float');
var Zoom = require('./zoom');
var Tooltip = require('./tooltip');
var Controls = require('./controls');
var Config = require('.././config');
var Search = require('./search');
var Api = require('../data/api');

module.exports = React.createClass({
  getInitialState: function() {
    console.log(window.zone);
    return {
      float: 1,
      active: true,
      zone: 0,
      elem: [],
      offsetX: 0,
      offsetY: 0
    }
  },
  _updateMaps: function() {
    var self= this;
    var $pep = $('#drag').pep();
  },
  _selectZone: function(zone) {
    $("polygon.active_zone, path.active_zone").removeClass('active_zone');
    $("polygon#zone" + zone +", path" + zone).addClass('active_zone');
    var ids = parseInt(zone)
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
      $('#way_'+ids).addClass('active');
    }
  },
  componentDidMount: function() {
    this._updateMaps();
    var self = this;
    Api.get('zonelist/')
      .then(function(json){
        self.setState({
          elem: json,
        })
      }.bind(this));
  },
  componentDidUpdate: function() {
    if (this.state.zone != 0) {
      this._selectZone(this.state.zone);
    }
    this._updateMaps();
    var self = this;
    setTimeout(function() {
      self.setState({active: true})
    }, 100);
  },
  componentWillReceiveProps: function() {
     this.setState({active: true});
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    if (nextState.elem !== this.state.elem) {
      return true
    } else if (nextState.active == this.state.active && nextState.elem == this.state.elem) {
      return false
    } else {
      return true;
    }

    // return nextState.active !== this.state.active;
  },
  _updateFloat: function(e) {
    this.setState({
      float: e,
      active: false
    });
  },
  _activeZone: function(e, float) {
    this.setState({
      zone: e
    });
    this._updateFloat(float);
  },
  render: function() {
    var float_size = 'float' + this.state.float;
    return (
      <div id="map" ref="map" className="map">
        <Zoom />
        <Tooltip elem={this.state.elem} x={this.state.offsetX} y={this.state.offsetY}/>
        <Search activeZone={this._activeZone}/>
        <svg onLoad={this._loaderMaps} viewBox={'0 0 ' + Config[float_size].width + ' ' + Config[float_size].height} className={this.state.active ? 'fade-in' : ''} >
          <g id="zoom" ref="zoom">
            <Float content={this.state.float}/>
          </g>
        </svg>
        <Controls float={this.state.float} changeFloat={this._updateFloat} />
      </div>
    )
  }
})
