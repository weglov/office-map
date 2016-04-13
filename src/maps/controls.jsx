var React = require('react');
var Config = require('../config');

module.exports = React.createClass({
  _changeFloat: function(e) {
    return this.props.changeFloat(e);
  },
  _activeClass: function(e) {
    if (this.props.float == e) {
      return " floats__item--active"
    }
  },
  render: function() {
    return (
        <ul className="floats">
            <li className={"floats__item floats__item--1" + this._activeClass(1)} onClick={this._changeFloat.bind(this, 1)} ref="name">1 этаж</li>
            <li className={"floats__item floats__item--2" + this._activeClass(2)} onClick={this._changeFloat.bind(this, 2)}>2 этаж</li>
            <li className={"floats__item floats__item--3" + this._activeClass(3)} onClick={this._changeFloat.bind(this, 3)}>3 этаж</li>
            <li className={"floats__item floats__item--4" + this._activeClass(4)} onClick={this._changeFloat.bind(this, 4)}>4 этаж</li>
            <li className={"floats__item floats__item--5" + this._activeClass(5)} onClick={this._changeFloat.bind(this, 5)}>5 этаж</li>
        </ul>
    )
  }
})
