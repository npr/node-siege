var siege = require('../lib/siege')
  , should = require('should');

describe('Siege',function(){
    describe('Siege exec',function(){
        it('should execute siege without any errors',function(done){
            siege('-t1s -c 1 -b -f www.txt',done);
        })
        it('should execute siege with an error', function(done){
            siege('',function(error) {
                error.should.be.an.instanceOf(Error);
                done();
            })
        })
        it('should not work with an object options signature', function(done) {
            siege({},function(err) {
                err.should.be.an.instanceOf(Error);
                done();
            })
        })
    })
});