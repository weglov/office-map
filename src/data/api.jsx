var Fetch = require('whatwg-fetch');
var rootUrl = 'http://office.ren-tv.com/export/zonelist/';

module.exports = {
  get: function() {
    return fetch(rootUrl, {
      credentials: ''
    })
    .then(function(response) {
      return response.json()
    })
  }
};
