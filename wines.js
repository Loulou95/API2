var request = require('request')

var wines = 'party';

exports.search = function(query, callback) {
  console.log('search')
  if (typeof query !== 'string' || query.length === 0) {
    callback({code:400, response:{status:'error', message:'missing query (q parameter)'}})
  }
  request.get({uri: 'http://api.snooth.com/wines/?akey=lazxs666bqts6whznbo61zal1yj06n4c4w09hn3ndm4z8dws', qs: {t: wines }}, function (error, response, body) { 
    if (!error && response.statusCode == 200) {
      console.log(body); 
      console.log(typeof body)
      const json = JSON.parse(body)
      const wines = json.wines.map(function(element) {
        return {wines:element.name}
      })
      console.log(wines)
      callback({code:200, response:{status:'success', message:wines.length+' wines found', data:wines}})
    }
  })
}
