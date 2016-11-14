function TimestampService() {

}

TimestampService.prototype.getParsedResponse = function(timestamp) {

  var date = new Date(timestamp);
  var result = {"unix": null, "natural": null};

  if (date.toString() === 'Invalid Date') {
    return result;  
  } else {
    result.unix = date.getTime();
    result.natural = date.toDateString();
    return result;
  }
}

module.exports = TimestampService;
