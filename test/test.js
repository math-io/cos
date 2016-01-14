'use strict';

// MODULES //

var test = require( 'tape' );
var abs = require( 'math-abs' );
var sin = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
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

	t.end();
});

test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v = sin( NaN );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

test( 'the function returns `NaN` if provided a `+infinity`', function test( t ) {
	var v = sin( Number.POSITIVE_INFINITY );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

test( 'the function returns `NaN` if provided a `-infinity`', function test( t ) {
	var v = sin( Number.NEGATIVE_INFINITY );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});
