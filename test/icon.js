describe('Icon : Operations on icon endpoints', function () {
    describe('getIconById', function () {
        it('should get an icon', function (done) {
            nounProject.getIconById('1', function (err, data) {
                assert.ifError(err);
                assert(data.icon);
                done();
            });
        });
    });

    describe('getIconByTerm', function (done) {
        it('should get an icon', function (done) {
            nounProject.getIconByTerm('test', function (err, data) {
                assert.ifError(err);
                assert(data.icon);
                done();
            });
        })
    });
});
