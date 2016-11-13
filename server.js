var path = require('path');
var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/:timestamp', function(req, res) {
  var timestamp = req.params.timestamp;
  var parsedResponse = getParsedResponse(timestamp);
  res.render('timestamp');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function getParsedResponse(timestamp) {
    console.log('Hello World!');
}
