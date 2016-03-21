/*global describe, beforeEach, it*/
'use strict';
var path    = require('path');
var assert  = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('koa generator', () => {
  before(done => {
    helpers
      .run(path.join(__dirname, '../app'))
      .on('end', done);
  });

  it('creates expected files', () => {
    var expected = [
      '.jshintrc',
      '.editorconfig',
      'package.json',
      'app.js',
      'views/layout.html',
      'views/list.html',
      'public/styles/main.css',
      'public/scripts',
      'controllers/messages.js',
      'test/routeSpec.js'
    ];
    assert.file(expected);
  });
});
