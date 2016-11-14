var path = require('path');
var express = require('express');
var TimestampService = require('./timestamp-service');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/:timestamp', function(req, res) {
  var timestampService = new TimestampService();
  var timestamp = req.params.timestamp;
  var parsedResponse = timestampService.getParsedResponse(timestamp);
  var timestampObject = JSON.stringify(parsedResponse);
  res.render('timestamp', {timestampObject: timestampObject});
})

app.listen(3000, function () {
  console.log('Timestamp Microservice listening on port 3000!');
})
