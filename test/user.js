describe('User : Operations on user endpoints', function () {
    describe('getUserCollection', function () {
        it('should get a users collection', function (done) {
            nounProject.getUserCollection('487481', 'contact', function (err, data) {
                assert.ifError(err);
                assert(data.collection);
                assert.equal(data.collection.author_id, '487481');
                done();
            });
        });
    });
    describe('getUserCollections', function () {
        it('should get a users collections', function (done) {
            nounProject.getUserCollections('1', function (err, data) {
                assert.ifError(err);
                assert(data.collections);
                done();
            });
        });
    });
    describe('getUserUploads', function () {
        it('should get a users uploads', function (done) {
            nounProject.getUserUploads('mnmly', function (err, data) {
                assert.ifError(err);
                assert(data.uploads);
                done();
            });
        });
    });
});
