var Fetch = require('whatwg-fetch');
var rootUrl = 'http://office.ren-tv.com/export/';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      credentials: ''
    })
    .then(function(response) {
      return response.json()
    })
  }
};
