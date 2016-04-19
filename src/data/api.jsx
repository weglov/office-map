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
  },
  array: function(arr, zone) {
          var array = [];
      for(var idx = 0, l = arr.length;idx < l;idx++) {
        if (arr[idx] && arr[idx].zone === zone) {
          array.push(arr[idx]);
        }
      }
      return array;
  }
};
