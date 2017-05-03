'use strict';
const messages = require('./controllers/messages');
const compress = require('koa-compress');
const logger = require('koa-logger');
const serve = require('koa-static');
const route = require('koa-route');
const koa = require('koa');
const path = require('path');
const convert = require('koa-convert');
const app = module.exports = new koa();

// Logger
app.use(convert(logger()));

app.use(convert(route.get('/', messages.home)));
app.use(convert(route.get('/messages', messages.list)));
app.use(convert(route.get('/messages/:id', messages.fetch)));
app.use(convert(route.post('/messages', messages.create)));
app.use(convert(route.get('/async', messages.delay)));
app.use(convert(route.get('/promise', messages.promise)));

// Serve static files
app.use(convert(serve(path.join(__dirname, 'public'))));

// Compress
app.use(convert(compress()));

if (!module.parent) {
	app.listen(3000);
	console.log('listening on port 3000');
}
