/*jslint node: true */
/*global describe:true, it:true */
/* Copyright (c) 2012 Mircea Alexandru */
/*
 * These tests assume a MySQL database/structure is already created.
 * execute script/schema.sql to create
 */

"use strict";

var seneca = require('seneca');
var async = require('async');
var assert = require('assert');
var shared = require('seneca-store-test');
var fs = require('fs');

var si = seneca();

var dbConfig;
if(fs.existsSync(__dirname + '/../test/dbconfig.mine.js')) {
  dbConfig = require('./dbconfig.mine');
} else {
  dbConfig = require('./dbconfig.example');
}

console.log(dbConfig);
