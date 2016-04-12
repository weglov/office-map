var React = require('react');
var Float5 = require('./floats/float5');
var Zoom = require('./zoom');
var Controls = require('./controls');
var Config = require('.././config');
var Search = require('./search');

module.exports = React.createClass({
  getDefaultProps:  function() {
      return {
        transX: 0,
        transY: 0,
        scale: 1
      }
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
  render: function() {
    return (
      <div id="map" className="map">
        <Zoom />
        <Search />
        <svg viewBox="0 0 1440 600">
          <g id="zoom">
            <Float5 />
          </g>
        </svg>
        <Controls />
      </div>
    )
  }
})
