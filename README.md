# generator-koa [![Build Status](https://secure.travis-ci.org/peter-vilja/generator-koa.png?branch=master)](https://travis-ci.org/peter-vilja/generator-koa)

> A [Koa](http://koajs.com) generator for [Yeoman](http://yeoman.io).

    .
    ├── controllers
    │   └── messages.js
    ├── public
    |   ├── scripts
    |   └── styles
    |       └── main.css    
    ├── test
    |   └── routeSpec.js
    ├── views
    |   ├── layout.html
    |   └── list.html
    ├── .editorconfig
    ├── .jshintrc
    ├── app.js
    └── package.json
  
## Install

Install with [npm](https://npmjs.org).

```
$ npm install -g yo
```

```
$ npm install -g generator-koa
```

Make a new directory and `cd` into it:

```
$ mkdir new-project && cd $_
```

Finally, initiate the generator:

```
$ yo koa
```

## Start

Requires Node.js >= v5.0.0

```
$ npm start
```

## Test

```
$ npm test
```

See [**Koa Examples**](https://github.com/koajs/examples/)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) @ Peter Vilja
