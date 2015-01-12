describe('Collection: Operations on collection endpoints', function () {
    describe('GetCollectionIconsById', function () {
        it('should get a list of collections', function (done) {
            nounProject.GetCollectionIconsById('1', function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                assert(data.icons.length > 0)
                done();
            });
        });
        it('should return only 1 collection', function (done) {
            nounProject.GetCollectionIconsById('1', { limit: 1 }, function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                assert(data.icons.length, 1);
                done();
            });
        });
    });

    describe('GetCollectionIconsBySlug', function () {
        it('should get a list of collections', function (done) {
            nounProject.GetCollectionIconsBySlug('contact', function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                done();
            });
        });
        it('should return an error if none found', function (done) {
            nounProject.GetCollectionIconsBySlug('', function (err, data) {
                assert(err);
                assert(err, 'HTTP 404 Status Code');
                done();
            });
        });
    });

    describe('GetCollectionById', function () {
        it('should return a collection', function (done) {
            nounProject.GetCollectionById('1',  function (err, data) {
                assert.ifError(err);
                assert(data.collection);
                done();
            });
        });
    });

    describe('GetCollectionBySlug', function () {
        it('should return a collection', function (done) {
            nounProject.GetCollectionBySlug('contact', function (err, data) {
                assert.ifError(err);
                assert(data.collection);
                done();
            });
        });
    });

});
