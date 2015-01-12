describe('Icon : Operations on icon endpoints', function () {
    describe('GetIconById', function () {
        it('should get an icon', function (done) {
            nounProject.GetIconById('1', function (err, data) {
                assert.ifError(err);
                assert(data.icon);
                done();
            });
        });
    });

    describe('GetIconByTerm', function (done) {
        it('should get an icon', function (done) {
            nounProject.GetIconByTerm('test', function (err, data) {
                assert.ifError(err);
                assert(data.icon);
                done();
            });
        })
    });
});
