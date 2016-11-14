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
  var timestampObject = JSON.stringify(parsedResponse);
  res.render('timestamp', {timestampObject: timestampObject});
})

app.listen(3000, function () {
  console.log('Timestamp Microservice listening on port 3000!');
})

function getParsedResponse(timestamp) {
  var date = new Date(timestamp);
  var result = {"unix": null, "natural": null};

  console.log('date');
  console.log(date);

  if (date === 'Invalid Date') {
    return result;  
  } else {
    result.unix = date.getTime();
    result.natural = date.toDateString();
    return result;
  }
}
