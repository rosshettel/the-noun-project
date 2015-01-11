var assert = require('assert');

describe('Collection: Operations on collection endpoints', function () {
    it('should get a list of collections', function (done) {
        nounProject.GetCollectionIconsById('1', {}, function (err, data) {
            assert.ifError(err);
            assert(data.icons);
            assert(data.icons.length > 0)
            done();
        });
    });
});
