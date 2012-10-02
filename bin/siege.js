#!/usr/bin/env node

var program = require('commander')
  , path = require('path')
  , version = require(path.resolve(__dirname, '../package.json')).version;

program
  .version(version)
  .usage('[options]')
  .usage('[options]\n\t siege.js [options] URL\n\t siege.js -g URL')
  .option('-c, --concurrent [NUM]','CONCURRENT users, default is 10',10)
  .option('-g, --get [url]', 'GET, pull down HTTP headers and display the transaction. Great for application debugging.')
  .option('-i, --internet','INTERNET user simulation, hits URLs randomly.')
  .option('-b, --benchmark','BENCHMARK: no delays between requests.')
  .option('-t, --time [NUM]','Time in seconds for a test to run')
  .option('-d, --delay [NUM]','Time DELAY, random delay before each request between 1 and NUM',Number)
  .option('-f, --file [FILE]','FILE, select a specific URLS FILE.')
  .parse(process.argv);

require('../')(program,function(err){
    if(err) {
        console.error('Error: ' + err.message);
        process.exit(1);
    }
    setTimeout(process.exit, 100);
});