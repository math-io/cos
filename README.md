Cosine
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [cosine][cosine] of a number.


## Installation

``` bash
$ npm install math-cos
```


## Usage

``` javascript
var cos = require( 'math-cos' );
```

#### cos( x )

Computes the [cosine][cosine] of a `number` (in radians).

``` javascript
var val = cos( 0 );
// returns 1

val = cos( Math.PI/4 );
// returns ~0.707

val = cos( -Math.PI/6 );
// returns ~0.866
```


## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var cos = require( 'math-cos' );

var x = linspace( 0, 2*Math.PI, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
	console.log( cos( x[ i ] ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-cos.svg
[npm-url]: https://npmjs.org/package/math-cos

[build-image]: http://img.shields.io/travis/math-io/cos/master.svg
[build-url]: https://travis-ci.org/math-io/cos

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/cos/master.svg
[coverage-url]: https://codecov.io/github/math-io/cos?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/cos.svg
[dependencies-url]: https://david-dm.org/math-io/cos

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/cos.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/cos

[github-issues-image]: http://img.shields.io/github/issues/math-io/cos.svg
[github-issues-url]: https://github.com/math-io/cos/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[cosine]: https://en.wikipedia.org/wiki/Cosine
