describe('Icons : Operations on icons endpoints', function () {
    describe('GetRecentIcons', function () {
        it('should return recent icons', function (done) {
            nounProject.GetRecentIcons(function (err, data) {
                assert.ifError(err);
                assert(data.recent_uploads);
                done();
            });
        });
        it('should return 2 recent icons', function (done) {
            nounProject.GetRecentIcons({limit: 2}, function (err, data) {
                assert.ifError(err);
                assert(data.recent_uploads);
                assert.equal(data.recent_uploads.length,2);
                done();
            });
        });
    });

    describe('GetIconsByTerm', function () {
        it('should return icons', function (done) {
            nounProject.GetIconsByTerm('goat', function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                done();
            });
        });
        it('should return 5 icons', function (done) {
            nounProject.GetIconsByTerm('goat', {limit: 5}, function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                assert.equal(data.icons.length, 5);
                done();
            });
        });
    });
});
