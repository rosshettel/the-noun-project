describe('Collection: Operations on collection endpoints', function () {
    describe('getCollectionIconsById', function () {
        it('should get a list of collections', function (done) {
            nounProject.getCollectionIconsById('2', function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                assert(data.icons.length > 0)
                done();
            });
        });
        it('should return only 1 collection', function (done) {
            nounProject.getCollectionIconsById('2', { limit: 1 }, function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                assert(data.icons.length, 1);
                done();
            });
        });
    });

    describe('getCollectionIconsBySlug', function () {
        it('should get a list of collections', function (done) {
            nounProject.getCollectionIconsBySlug('contact', function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                done();
            });
        });
        it('should return an error if none found', function (done) {
            nounProject.getCollectionIconsBySlug('', function (err, data) {
                assert(err);
                assert(err, 'HTTP 404 Status Code');
                done();
            });
        });
    });

    describe('getCollectionById', function () {
        it('should return a collection', function (done) {
            nounProject.getCollectionById('1',  function (err, data) {
                assert.ifError(err);
                assert(data.collection);
                done();
            });
        });
    });

    describe('getCollectionBySlug', function () {
        it('should return a collection', function (done) {
            nounProject.getCollectionBySlug('contact', function (err, data) {
                assert.ifError(err);
                assert(data.collection);
                done();
            });
        });
    });
});
