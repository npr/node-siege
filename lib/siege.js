/*
 * node-siege
 * https://github.com/npr/node-siege
 *
 * Copyright (c) 2012 johnymonster
 * Licensed under the MIT license.
 */
var exec = require('child_process').exec
  , async = require('async');

module.exports = function siege(options, cb) {
    var args = options;
    if(typeof options !== 'string') {
        args = optionsToString(options);
    }

    if(args !== false && args != '') {
        async.waterfall([
          exists,
          async.apply(run, args)
        ], function(err, results){
            cb(err,results);
        });
    } else {
        cb(new Error('Unable to parse options'));
    }
};

function exists(cb) {
    exec('which siege', function(error, stdout, stderr){
        if(error) {
            console.error('please install siege. http://www.joedog.org/siege-home/');
        }
        cb(error);
    })
}

function run(args, cb) {
    exec('siege ' + args, function(error, stdout, stderr){
        cb(error, stderr, stdout);
    });
}

/**
 * At some point allow for an object of options
 * currently not needed for this project
 * @param options
 */
function optionsToString(options) {
    return false;
}