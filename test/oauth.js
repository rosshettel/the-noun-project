describe('Oauth : Operations on oauth endpoints', function () {
    it('should get usage details', function (done) {
        nounProject.getUsage(function(err, data) {
            assert.ifError(err);
            assert(data);
            assert(data.usage.monthly < data.limits.monthly);
            done();
        });
    });
});
