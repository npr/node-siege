/*
 * node-siege
 * https://github.com/npr/node-siege
 *
 * Copyright (c) 2012 johnymonster
 * Licensed under the MIT license.
 */
var exec = require('child_process').exec;

module.exports = function siege(options, cb) {
    var args = options;
    if(typeof options !== 'string') {
        args = buildOptionString(options);
    }

    if(args !== false) {
        //-t5s -c 1 -b -f www.txt
        child = exec('siege ' + args, function(error, stdout, stderr){
            cb(error, stderr, stdout);
        });
    } else {
        cb(new Error('Unable to parse options as object'));
    }
};

/**
 * At some point allow for an object of options
 * currently not needed for this project
 * @param options
 */
function buildOptionString(options) {
    return false;
}