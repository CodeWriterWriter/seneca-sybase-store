/*
 * Copyright (c) 2014 Marco Piraccini
 * These tests assume a Sybase SQL Anywhere database/structure is already created.
 */

"use strict";

var seneca = require('seneca');
var assert = require('assert');
var shared = require('seneca-store-test');
var fs = require('fs');

var si = seneca();

var dbConfig;
if (fs.existsSync(__dirname + '/../test/dbconfig.mine.js')) {
  dbConfig = require('./dbconfig.mine');
} else {
  dbConfig = require('./dbconfig.example');
}

console.log(dbConfig);

si.__testcount = 0;
var testcount = 0;

describe('sybase', function () {
  it('basic', function (done) {
    testcount++;
    shared.basictest(si, done);
  });

//  TODO: Verify if we need extra-tests
//  it('extra', function (done) {
//    testcount++;
//    extra.test(si, done);
//  });

  it('close', function (done) {
    shared.closetest(si, testcount, done);
  });
});
