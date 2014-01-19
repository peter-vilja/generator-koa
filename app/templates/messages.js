'use strict';
var views = require('co-views');
var parse = require('co-body');
var messages = [
  { id: 0, message: 'Koa next generation web framework for node.js' },
  { id: 1, message: 'Koa is a new web framework designed by the team behind Express' }
];

var render = views(__dirname + '/../views', {
  map: { html: 'swig' }
});

function *home() {
	this.body = yield render('list', { 'messages': messages });
}

function *listJson() {
	this.body = yield messages;
}

function *fetch(id) {
	var message = messages[id];
	if (!message) {
    this.throw(404, 'message with id = ' + id + ' was not found');
  }
	this.body = yield message;
}

function *create() {
	var message = yield parse(this);
	var id = messages.push(message) - 1;
	message.id = id;
	this.redirect('/');
}

module.exports.home = home;
module.exports.list = listJson;
module.exports.fetch = fetch;
module.exports.create = create;
module.exports.messages = messages;