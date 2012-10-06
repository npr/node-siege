var siege = require('../lib/siege')
  , should = require('should')
  , express = require('express');

var app = express()
  , config = {
      port: 4567
  }

app.get('/',function(req,res){
    res.send('hit');
})

app.listen(config.port);

describe('Siege',function(){
    describe('Siege exec',function(){
        it('should execute siege without any errors',function(done){
            this.timeout(5000);
            var attack = siege()
              .args('-t3s -c 10 -b -f./urls.txt')
              .on('error',done)
              .on('exit',function(code){
                  attack.running.should.be.false;
                  done();
              })
              .run();
        })
        it('should execute siege and emit an error', function(done){
            siege()
              .args('')
              .on('error',function(error){
                  error.should.be.an.instanceOf(Error);
                  done();
              })
              .run();
        })
        it('should not execute with an object args signature', function(done) {
            siege()
              .args({})
              .on('error', function(error){
                  error.should.be.an.instanceOf(Error);
                  done();
              })
              .run();
        })
    })
});