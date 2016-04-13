var React = require('react');
var Float = require('./floats/float');
var Zoom = require('./zoom');
var Controls = require('./controls');
var Config = require('.././config');
var Search = require('./search');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      float: 2,
      active: true
    }
  },
  getDefaultProps:  function() {
      return {
        float: 2
      }
  },
  changeFloat: function() {
    return 5;
  },
  _updateMaps: function() {
    $("polygon, path").mouseenter(function() {
      $(this).addClass('active');
    });
    $("polygon, path").mouseleave(function() {
        $(this).removeClass('active');
    });
    $('text').mouseenter(function() {
      var id = $(this).parents().attr("id").slice(2);
      $("polygon#zone" + id+", path" +id).addClass('active');
    });
    $('text').mouseleave(function() {
      var id = $(this).parents().attr("id").slice(2);
      $("polygon#zone" + id+", path" +id).removeClass('active');
    });
    var $pep = $('#drag').pep();
    // Drag init
    $pep.data('plugin_pep').setScale(2);
  },
  componentDidMount: function() {
    this._updateMaps();
    var self = this;
    setTimeout(function() {
      self.setState({active: true})
    }, 2000);
  },
  componentDidUpdate: function() {
    this._updateMaps();
    var self = this;
    setTimeout(function() {
      self.setState({active: true})
    }, 100);
  },
  componentWillReceiveProps: function() {
     this.setState({active: true});
  },
  _loaderMaps: function() {
    console.log('loasd');
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log(nextState);
    return nextState.active !== this.state.active;
  },
  _updateFloat: function(e) {
    this.setState({
      float: e,
      active: false
    });
  },
  render: function() {
    var float_size = 'float' + this.state.float;
    return (
      <div id="map" className="map">
        <Zoom />
        <Search />
        <svg onLoad={this._loaderMaps} viewBox={'0 0 ' + Config[float_size].width + ' ' + Config[float_size].height} className={this.state.active ? 'fade-in' : ''} >
          <g id="zoom">
            <Float content={this.state.float}/>
          </g>
        </svg>
        <Controls float={this.state.float} changeFloat={this._updateFloat} />
      </div>
    )
  }
})
