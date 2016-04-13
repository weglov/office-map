var React = require('react');
var Float = require('./floats/float');
var Zoom = require('./zoom');
var Controls = require('./controls');
var Config = require('.././config');
var Search = require('./search');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      float: 5
    }
  },
  getDefaultProps:  function() {
      return {
        float: 5
      }
  },
  changeFloat: function() {
    return 5;
  },
  componentDidMount: function() {
    $("polygon").mouseenter(function() {
      $(this).addClass('active');
    });
    $("polygon").mouseleave(function() {
        $(this).removeClass('active');
    });
    $('text').mouseenter(function() {
      var id = $(this).parents().attr("id").slice(2);
      $("polygon#zone" + id).addClass('active');
    });
    $('text').mouseleave(function() {
      var id = $(this).parents().attr("id").slice(2);
      $("polygon#zone" + id).removeClass('active');
    });
    var $pep = $('#drag').pep({

    });
    // Drag init
    $pep.data('plugin_pep').setScale(2);
  },
  _updateFloat: function(e) {
    this.setState({
      float: e
    });
  },
  render: function() {
    return (
      <div id="map" className="map">
        {Map}
        <Zoom />
        <Search />
        <svg viewBox="0 0 1440 600">
          <g id="zoom">
            <Float content={this.state.float}/>
          </g>
        </svg>
        <Controls float={this.state.float} changeFloat={this._updateFloat} />
      </div>
    )
  }
})
