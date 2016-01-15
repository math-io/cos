'use strict';

// MODULES //

var test = require( 'tape' );
var abs = require( 'math-abs' );
var cos = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof cos === 'function', 'main export is a function' );
	t.end();
});

test( 'the function computes the cosine', function test( t ) {
	var delta;

	delta = abs( cos( 0 ) - 1 );
	t.ok( delta < 1e-14, 'approx 1' );

	delta = abs( cos( Math.PI/2 ) - 0 );
	t.ok( delta < 1e-14, 'approx 0' );

	delta = abs( cos( Math.PI/3 ) - 0.5 );
	t.ok( delta < 1e-14, 'approx 1/2' );

	delta = abs( cos( Math.PI/4 ) - Math.sqrt(2)/2 );
	t.ok( delta < 1e-14, 'approx sqrt(2)/2' );
	
	t.end();
});


test( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v = cos( NaN );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

test( 'the function returns `NaN` if provided a `+infinity`', function test( t ) {
	var v = cos( Number.POSITIVE_INFINITY );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});

test( 'the function returns `NaN` if provided a `-infinity`', function test( t ) {
	var v = cos( Number.NEGATIVE_INFINITY );
	t.ok( v !== v, 'returns NaN' );
	t.end();
});
