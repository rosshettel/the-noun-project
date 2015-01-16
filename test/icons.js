describe('Icons : Operations on icons endpoints', function () {
    describe('getRecentIcons', function () {
        it('should return recent icons', function (done) {
            nounProject.getRecentIcons(function (err, data) {
                assert.ifError(err);
                assert(data.recent_uploads);
                done();
            });
        });
        it('should return 2 recent icons', function (done) {
            nounProject.getRecentIcons({limit: 2}, function (err, data) {
                assert.ifError(err);
                assert(data.recent_uploads);
                assert.equal(data.recent_uploads.length,2);
                done();
            });
        });
    });

    describe('getIconsByTerm', function () {
        it('should return icons', function (done) {
            nounProject.GetIconsByTerm('goat', function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                done();
            });
        });
        it('should return 5 icons', function (done) {
            nounProject.getIconsByTerm('goat', {limit: 5}, function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                assert.equal(data.icons.length, 5);
                done();
            });
        });
        it('should not 500 if passed limit_to_public_domain: true', function (done) {
            nounProject.getIconsByTerm('goat', {limit_to_public_domain: true}, function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                done();
            });
        });
        it('should return only public domain icons', function (done) {
            nounProject.getIconsByTerm('goat', {limit_to_public_domain: true}, function (err, data) {
                assert.ifError(err);
                assert(data.icons);
                assert.equal(data.icons[0].license_description, 'public-domain');
                done();
            });
        });
    });
});
