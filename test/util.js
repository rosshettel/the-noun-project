describe('Util Helper', function () {
    var Util = require('../util.js');

    describe('isFunction', function () {
        it('should return true when a function is passed in', function () {
            var test = function () {};  //empty function
            assert.equal(Util.isFunction(test), true);
        });
        it('should return false when an object is passed in', function () {
            var test = {};  //empty obj
            assert.equal(Util.isFunction(test), false);
        });
        it('should return false when a string is passed in', function () {
            var test = '';
            assert.equal(Util.isFunction(test), false);
        });
    });

    describe('objectToQueryString', function () {
        it('should return one query item', function () {
            var test = Util.objectToQueryString({
                foo: 'bar'
            });
            assert.equal(test, '?foo=bar');
        });
        it('should handle encoded strings', function () {
            var test = Util.objectToQueryString({
                name: 'ross hettel'
            });
            assert.equal(test, '?name=ross%20hettel');
        });
        it('should handle multiple items', function () {
            var test = Util.objectToQueryString({
                color: 'red',
                size: 'med'
            });
            assert.equal(test, '?color=red&size=med');
        });
        it('should handle multiple items', function () {
            var test = Util.objectToQueryString({
                limit: 1,
                offset: 2,
                page: 3
            });
            assert.equal(test, '?limit=1&offset=2&page=3');
        });
        it('should return nothing if empty object', function () {
            var test = Util.objectToQueryString({});
            assert.equal(test, '');
        });
    });
});
