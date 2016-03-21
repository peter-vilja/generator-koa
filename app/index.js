'use strict';
const util = require('util');
const path = require('path');
const yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function () {
    const copy = (t, d) => this.fs.copy(this.templatePath(t), this.destinationPath(d));
    copy('routeSpec.js', 'test/routeSpec.js');
    copy('layout.html', 'views/layout.html');
    copy('list.html', 'views/list.html');
    copy('main.css', 'public/styles/main.css');
    copy('gitkeep', 'public/scripts/.gitkeep');
    copy('messages.js', 'controllers/messages.js');
    copy('app.js', 'app.js');
    copy('editorconfig', '.editorconfig');
    copy('jshintrc', '.jshintrc');
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {basename: path.basename(process.cwd())}
    );
  },

  install: function () {
    this.installDependencies();
  }
});
