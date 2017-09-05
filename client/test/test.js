var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});
var should = require('chai').should();
var foo = 'bar';
var beverages = { tea: ['chai', 'matcha', 'oolong'] };
describe('foo', function () {
    it('should be a string', function () {
        foo.should.be.a('string');
    });
});
