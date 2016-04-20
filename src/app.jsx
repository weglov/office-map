var React = require('react');
var ReactDOM = require('react-dom');
var Maps = require('./maps/map');
var Route = require('react-router').Route;
var Link = require('react-router').Link;


var Map = React.createClass({
  render: function() {
    return <Maps />
  }
});

var map = React.createElement(Map, {});
ReactDOM.render(map, document.getElementById('office__map'));
