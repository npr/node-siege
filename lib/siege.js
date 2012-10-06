/*
 * node-siege
 * https://github.com/npr/node-siege
 *
 * Copyright (c) 2012 johnymonster
 * Licensed under the MIT license.
 */
var spawn = require('child_process').spawn
  , events = require('events')
  , util = require('util');


function Siege(args) {
    events.EventEmitter.call(this);
    this.child;
    this.running = false;
    this._args = [];
    this.args(args);
}

util.inherits(Siege, events.EventEmitter);

Siege.prototype.run = function() {
    var source = this

    if(this._args.length < 1) {
        source.error('Valid arguments required');
        return this;
    }

    source.running = true;

    source.child = spawn('siege',this._args);

    source.child.stdout.on('data',function(data) {
        source.emit('stdout',data);
    });
    source.child.stderr.on('data',function(data){
        source.emit('stderr',data);
    });
    source.child.on('exit',function(code,signal) {
        source.running = false;
        source.emit('exit', code, signal, source.child);
    });
    return this;
}

Siege.prototype.args = function(args) {
    if(typeof args !== 'undefined' && typeof args === 'string' && args != '') {
        this._args = [args];
        this.validateArgs();
    }
    return this;
}

Siege.prototype.validateArgs = function() {
    if(typeof this._args[0] !== 'string') {
        this._args = [];
        this.error('String options required');
    }
}

Siege.prototype.error = function(err) {
    if (this.listeners('error').length === 0) {
        throw er; // Unhandled stream error in pipe.
    }
    if(err instanceof Error) {
        this.emit('error', err);
    }
    if(typeof err === 'string') {
        this.emit('error',new Error(err));
    }
}

module.exports = function() {
    return new Siege();
};