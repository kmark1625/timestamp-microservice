function TimestampService() { }

// Returns the appropriate object response with unix and natural time.
// unix and natural time are null if input is not a valid time string.
TimestampService.prototype.getParsedResponse = function(inputTimeString) {
  var timestamp = cleanInputTimeString(inputTimeString);
  var date = new Date(timestamp);
  var result = {"unix": null, "natural": null};
  return isValidDate(date) ? result : updateDateObject(result, date)
}

// Parses unix time string into an int in milliseconds
function cleanInputTimeString(input) {
  return !isNaN(parseInt(input)) ? parseInt(input)*1000 : input;
}

// Checks if date object contains a valid date
function isValidDate(date) {
    return date.toString() === 'Invalid Date';
}

// Updates the result object with the unix and natural time
function updateDateObject(result, date) {
    result.unix = date.getTime() / 1000;
    result.natural = date.toDateString();
    return result;
}

module.exports = TimestampService;
