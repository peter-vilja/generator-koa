'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KoaGenerator = module.exports = function KoaGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
  this.basename = path.basename(process.cwd());
};

util.inherits(KoaGenerator, yeoman.generators.Base);

KoaGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);
  cb();
};

KoaGenerator.prototype.app = function app() {
  this.mkdir('controllers');
  this.mkdir('public/scripts');
  this.mkdir('public/styles');
  this.mkdir('views');
  this.mkdir('test');

  this.copy('routeSpec.js', 'test/routeSpec.js');
  this.copy('layout.html', 'views/layout.html');
  this.copy('list.html', 'views/list.html');
  this.copy('main.css', 'public/styles/main.css');
  this.copy('messages.js', 'controllers/messages.js');
  this.copy('app.js', 'app.js');
  this.copy('_package.json', 'package.json');
};

KoaGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
};
