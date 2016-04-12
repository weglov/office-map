var React = require('react');
var Config = require('../config');

module.exports = React.createClass({
  render: function() {
    return (
        <div className="search">
          <input type="text" ref="searchInput" placeholder="Введите имя сотрудника или номер кабинета" className="search__input" value={this.props.query} onChange={this.doSearch}/>
        </div>
    )
  }
})
