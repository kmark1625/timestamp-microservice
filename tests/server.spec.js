var chai = require('chai');
var expect = chai.expect;
var Server = require('../server');

describe('Server', function() {
    it('getParsedResponse() should return object with null if invalid date', function() {
        var result = getParsedResponse('invalid input');
        expect(true).to.equal(false);
    });
});
