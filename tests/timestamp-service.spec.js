var chai = require('chai');
var expect = chai.expect;
var TimestampService = require('../timestamp-service');

describe('TimestampService', function() {
    it('getParsedResponse() should return object with null if invalid date', function() {
        var timestampService = new TimestampService();
        var result = timestampService.getParsedResponse('invalid input');
        expect(result.unix).to.equal(null);
        expect(result.natural).to.equal(null);
    });

    it('getParsedResponse() should return object with correct unix and natural language if input a unix timestamp', function() {
        var timestampService = new TimestampService();
        var result = timestampService.getParsedResponse('1450137600');
        expect(result.unix).to.equal(1450137600);
        expect(result.natural).to.equal('Mon Dec 14 2015');
    });

    it('getParsedResponse() should return object with correct unix and natural language if input a date', function() {
        var timestampService = new TimestampService();
        var result = timestampService.getParsedResponse('December 14, 2015');
        expect(result.unix).to.equal(1450072800);
        expect(result.natural).to.equal('Mon Dec 14 2015');
    })
});
