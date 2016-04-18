var React = require('react');
var Config = require('../config');
var Search  = require('react-search');
var Api = require('../data/api');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      zone: [],
      key: 'name',
      keys: ['name', 'zone']
    }
  },
  componentDidMount: function() {
    this.serverRequest = Api.get()
			.then(function(json){
        this.setState({
  				zone: json
           });
			}.bind(this));
  },
  _change: function(e) {
    console.log(e.target.value);
  },
  _onClick: function(e) {
    console.log('this', e);
  },
  changeInput (e) {
   console.log(e)
  },
  render: function() {
    return (
        <div className="search">
          <Search       className="search__input"
                        placeholder="Введите имя сотрудника или номер кабинета"
                        items={this.state.zone}
                        keys={this.state.keys}
                        onChange={this._change}
                        onClick={this._onClick}
                        searchKey={this.state.key} />
        </div>
    )
  }
})
