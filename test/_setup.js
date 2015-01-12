"use strict";
global.assert = require('assert');  //set assert to global so we don't have to keep requiring it

before(function (done) {
    var NounProject = require('../nounproject.js'),
        nounProject = new NounProject({
            //my personal keys, please don't use these in your project
            key: '8cc6316e5a93414aa72470379f48a368',
            secret: '087b4f12335849e0adf84907db086f4f'
        });

    global.nounProject = nounProject;
    done();
});
