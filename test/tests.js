const assert = require('assert');
const sum = require('../app');

console.log(sum);

describe('app', function() {
    describe('#sum', function() {
        it('should return 10 when given array [1,2,3,4]', function() {
            assert.equal(sum([1,2,3,4]), 10);
        });
        it('should return 2 when given array [2]', function() {
            assert.equal(sum([2]), 2);
        });
        it('should return 0 when not given an array', function() {
            assert.equal(sum('f'), 0);
        });
    });
});