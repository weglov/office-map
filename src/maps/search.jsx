var React = require('react');
var Config = require('../config');
var Search  = require('react-search');
var Api = require('../data/api');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      zone: [],
      key: 'name',
      keys: ['name', 'zone'],
      active: false,
      float: 0
    }
  },
  componentDidMount: function() {
    this.serverRequest = Api.get('zonelist/')
			.then(function(json){
        this.setState({
  				zone: json
           });
			}.bind(this));
  },
  _change: function(e) {
    var str = e.target.value.charAt(0);
    if (str.match(/[1-6]/)) {
      this.setState({
        key: 'zone'
      })
    } else {
      this.setState({
        key: 'name'
      })
    }
  },
  _activeZone: function(e, float) {
    return this.props.activeZone(e, float);
  },
  _clear: function() {
    $('.react-search__input').val('').removeClass('react-search__active');
    $("polygon.active_zone, path.active_zone").removeClass('active_zone');
    this.setState({
      active: false
    });
  },
  _onClick: function(e, result, zone) {
    var float;
    this.setState({
      active: true,
      float: zone
    });
    float = zone.charAt(0).match(/[1-6]/) ? zone.charAt(0) : null
    this._activeZone(zone, float);
  },
  render: function() {
    return (
        <div className="search">
          <div className="search__icon"><div className="search__icon--icon"></div></div>
          <Search       className="search__input"
                        placeholder="Введите имя сотрудника или номер кабинета"
                        items={this.state.zone}
                        keys={this.state.keys}
                        onChange={this._change}
                        onClick={this._onClick}
                        searchKey={this.state.key} />
                      <div className={this.state.active ? "search__clear active" : "search__clear"}><span className="search__float">{this.state.float}</span><span onClick={this._clear}>&#10006;</span></div>
        </div>
    )
  }
})
