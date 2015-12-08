var fs = require('fs')

var restify = require('restify')
var server = restify.createServer()

server.use(restify.fullResponse())
server.use(restify.queryParser())
server.use(restify.bodyParser())
server.use(restify.authorizationParser())

var wines = require('./wines.js')
var mongo = require ('./mongo.js')

server.get('/wines', function(req, res) {
  console.log('GET /wines')
  const searchTerm = req.query.q
  console.log('q='+searchTerm)
  wines.search(searchTerm, function(data) {
    var results = data.response.data
    mongo.addList(results, function(data){
    })
    
    mongo.clear()
    console.log(data)
    res.setHeader('content-type', 'application/json');
    res.send(data.code, data.response);
    res.end();
    
    })
 })
    
    

var port = process.env.PORT || 8080;
server.listen(port, function (err) {
  if (err) {
      console.error(err);
  } else {
    console.log('App is ready at : ' + port);
  }

  
})
