var React = require('react');
var Config = require('../config');

module.exports = React.createClass({
  render: function() {
    return (
        <ul className="floats">
            <li className="floats__item floats__item--1">1 этаж</li>
            <li className="floats__item floats__item--2">2 этаж</li>
            <li className="floats__item floats__item--3">3 этаж</li>
            <li className="floats__item floats__item--4">4 этаж</li>
            <li className="floats__item floats__item--5 floats__item--active">5 этаж</li>
        </ul>
    )
  }
})
