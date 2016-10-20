var React = require('react');
var ReactDOM = require('react-dom');
var Maps = require('./maps/map');


var Map = React.createClass({
  render: function() {
    return (
    	<div>
    		<Maps />
    	</div>
  	)
  }
});

var map = React.createElement(Map);
ReactDOM.render(map, document.getElementById('office__map'));
