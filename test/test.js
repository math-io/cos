'use strict';

// MODULES //

var test = require( 'tape' );
var abs = require( 'math-abs' );
<<<<<<< HEAD
var cos = require( './../lib' );
=======
var sin = require( './../lib' );
>>>>>>> origin/master


// TESTS //

test( 'main export is a function', function test( t ) {
<<<<<<< HEAD
	t.ok( typeof cos === 'function', 'main export is a function' );
	t.end();
});

test( 'the function computes the cosine', function test( t ) {
	var delta;

	delta = abs( cos( 0 ) - 1 );
	t.ok( delta < 1e-14, 'approx 0' );

	delta = abs( cos( Math.PI/2 ) - 0 );
	t.ok( delta < 1e-14, 'approx 0' );

	delta = abs( cos( Math.PI/3 ) - 0.5 );
	t.ok( delta < 1e-14, 'approx 1/2' );

	delta = abs( cos( Math.PI/4 ) - Math.sqrt(2)/2 );
	t.ok( delta < 1e-14, 'approx 1/2' );
=======
	t.ok( typeof sin === 'function', 'main export is a function' );
	t.end();
});

test( 'the function computes the sine', function test( t ) {
	var delta;

	delta = abs( sin( 0 ) - 0 );
	t.ok( delta < 1e-14, 'approx 0' );

	delta = abs( sin( Math.PI ) - 0 );
	t.ok( delta < 1e-14, 'approx 0' );

	delta = abs( sin( Math.PI/6 ) - 0.5 );
	t.ok( delta < 1e-14, 'approx 1/2' );

	delta = abs( sin( -Math.PI/6 ) + 0.5 );
	t.ok( delta < 1e-14, 'approx -1/2' );

	delta = abs( sin( Math.PI/2 ) - 1 );
	t.ok( delta < 1e-14, 'approx 1' );

	delta = abs( sin( -Math.PI/2 ) + 1 );
	t.ok( delta < 1e-14, 'approx -1' );
>>>>>>> origin/master

	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
<<<<<<< HEAD
	var v = cos( NaN );
=======
	var v = sin( NaN );
>>>>>>> origin/master
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

test( 'the function returns `NaN` if provided a `+infinity`', function test( t ) {
<<<<<<< HEAD
	var v = cos( Number.POSITIVE_INFINITY );
=======
	var v = sin( Number.POSITIVE_INFINITY );
>>>>>>> origin/master
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

test( 'the function returns `NaN` if provided a `-infinity`', function test( t ) {
<<<<<<< HEAD
	var v = cos( Number.NEGATIVE_INFINITY );
=======
	var v = sin( Number.NEGATIVE_INFINITY );
>>>>>>> origin/master
	t.ok( v !== v, 'returns NaN' );
	t.end();
});
