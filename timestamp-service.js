function TimestampService() {

}

TimestampService.prototype.getParsedResponse = function(timestamp) {
  if (!isNaN(parseInt(timestamp))) {
      console.log(parseInt(timestamp));
    timestamp = parseInt(timestamp) * 1000;
  }

  var date = new Date(timestamp);
  var result = {"unix": null, "natural": null};

  if (date.toString() === 'Invalid Date') {
    return result;  
  } else {
    result.unix = date.getTime() / 1000;
    result.natural = date.toDateString();
    return result;
  }
}

module.exports = TimestampService;
