/*global describe, beforeEach, it*/
'use strict';
var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('koa generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('koa:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
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

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
