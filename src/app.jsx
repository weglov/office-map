var React = require('react');
var ReactDOM = require('react-dom');
var Maps = require('./maps/map');

var Map = React.createClass({
  render: function() {
    return <Maps />
  }
});

var map = React.createElement(Map, {});
ReactDOM.render(map, document.querySelector('.container'));