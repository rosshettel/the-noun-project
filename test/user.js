describe('User : Operations on user endpoints', function () {
    describe('GetUserCollection', function () {
        it('should get a users collection', function (done) {
            nounProject.GetUserCollection('487481', 'contact', function (err, data) {
                assert.ifError(err);
                assert(data.collection);
                assert.equal(data.collection.author_id, '487481');
                done();
            });
        });
    });
    describe('GetUserCollections', function () {
        it('should get a users collections', function (done) {
            nounProject.GetUserCollections('1', function (err, data) {
                assert.ifError(err);
                assert(data.collections);
                done();
            });
        });
    });
    describe('GetUserUploads', function () {
        it('should get a users uploads', function (done) {
            nounProject.GetUserUploads('mnmly', function (err, data) {
                assert.ifError(err);
                assert(data.uploads);
                done();
            });
        });
    });
});
