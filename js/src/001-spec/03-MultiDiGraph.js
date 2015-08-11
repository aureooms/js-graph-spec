

const MultiDiGraph = function ( title , Constructor ) {

test( "graph-spec : MultiDiGraph > " + title , function ( ) {

	const G = new Constructor( ) ;

	const n = 10 ;

	let V , E ;

	const init = function ( ) {

		const V = [ for ( i of range( n ) ) G.vadd( i ) ] ;

		const E = [

			G.eadd( V[0] , V[1] ) ,
			G.eadd( V[0] , V[2] ) ,
			G.eadd( V[0] , V[3] ) ,

			G.eadd( V[4] , V[1] ) ,
			G.eadd( V[4] , V[2] ) ,
			G.eadd( V[4] , V[3] ) ,

			G.eadd( V[5] , V[6] ) ,
			G.eadd( V[5] , V[7] ) ,
			G.eadd( V[5] , V[8] ) ,

			G.eadd( V[9] , V[6] ) ,
			G.eadd( V[9] , V[7] ) ,
			G.eadd( V[9] , V[8] ) ,

			G.eadd( V[0] , V[1] ) ,
			G.eadd( V[0] , V[2] ) ,
			G.eadd( V[0] , V[3] ) ,

		] ;

		return [ V , E ] ;

	} ;

	const delete_all_edges = ( ) => ex( map( G.edel.bind( G ) , E ) ) ;
	const delete_all_vertices = ( ) => ex( map( G.vdel.bind( G ) , V ) ) ;

	[ V , E ] = init( ) ;

	deepEqual( cardinality.len( G.vitr( ) ) , 10 ) ;
	deepEqual( cardinality.len( G.eitr( ) ) , 15 ) ;

	delete_all_edges( ) ;

	deepEqual( cardinality.len( G.vitr( ) ) , 10 ) ;
	deepEqual( cardinality.len( G.eitr( ) ) , 0 ) ;

	delete_all_vertices( ) ;

	deepEqual( cardinality.len( G.vitr( ) ) , 0 ) ;
	deepEqual( cardinality.len( G.eitr( ) ) , 0 ) ;

	[ V , E ] = init( ) ;

	deepEqual( cardinality.len( G.vitr( ) ) , 10 ) ;
	deepEqual( cardinality.len( G.eitr( ) ) , 15 ) ;

	delete_all_vertices( ) ;

	deepEqual( cardinality.len( G.vitr( ) ) , 0 ) ;
	deepEqual( cardinality.len( G.eitr( ) ) , 0 ) ;

	[ V , E ] = init( ) ;

	deepEqual( cardinality.len( G.iitr( V[0] ) ) , 6 ) ;
	deepEqual( cardinality.len( G.iitr( V[1] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[2] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[3] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[4] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[5] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[6] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.iitr( V[7] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.iitr( V[8] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.iitr( V[9] ) ) , 3 ) ;

	deepEqual( cardinality.len( G.initr( V[0] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[1] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.initr( V[2] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.initr( V[3] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.initr( V[4] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[5] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[6] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.initr( V[7] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.initr( V[8] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.initr( V[9] ) ) , 0 ) ;

	deepEqual( cardinality.len( G.outitr( V[0] ) ) , 6 ) ;
	deepEqual( cardinality.len( G.outitr( V[1] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[2] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[3] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[4] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.outitr( V[5] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.outitr( V[6] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[7] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[8] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[9] ) ) , 3 ) ;

	G.reverse( ) ;

	deepEqual( cardinality.len( G.iitr( V[0] ) ) , 6 ) ;
	deepEqual( cardinality.len( G.iitr( V[1] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[2] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[3] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[4] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[5] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.iitr( V[6] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.iitr( V[7] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.iitr( V[8] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.iitr( V[9] ) ) , 3 ) ;

	deepEqual( cardinality.len( G.outitr( V[0] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[1] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.outitr( V[2] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.outitr( V[3] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.outitr( V[4] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[5] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.outitr( V[6] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.outitr( V[7] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.outitr( V[8] ) ) , 2 ) ;
	deepEqual( cardinality.len( G.outitr( V[9] ) ) , 0 ) ;

	deepEqual( cardinality.len( G.initr( V[0] ) ) , 6 ) ;
	deepEqual( cardinality.len( G.initr( V[1] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[2] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[3] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[4] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.initr( V[5] ) ) , 3 ) ;
	deepEqual( cardinality.len( G.initr( V[6] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[7] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[8] ) ) , 0 ) ;
	deepEqual( cardinality.len( G.initr( V[9] ) ) , 3 ) ;

	ok( set( G.nitr( V[0] ) ).isequal( [ V[1] , V[2] , V[3] ] ) ) ;
	ok( set( G.nitr( V[1] ) ).isequal( [ V[0] , V[4] ] ) ) ;
	ok( set( G.nitr( V[2] ) ).isequal( [ V[0] , V[4] ] ) ) ;
	ok( set( G.nitr( V[3] ) ).isequal( [ V[0] , V[4] ] ) ) ;
	ok( set( G.nitr( V[4] ) ).isequal( [ V[1] , V[2] , V[3] ] ) ) ;
	ok( set( G.nitr( V[5] ) ).isequal( [ V[6] , V[7] , V[8] ] ) ) ;
	ok( set( G.nitr( V[6] ) ).isequal( [ V[5] , V[9] ] ) ) ;
	ok( set( G.nitr( V[7] ) ).isequal( [ V[5] , V[9] ] ) ) ;
	ok( set( G.nitr( V[8] ) ).isequal( [ V[5] , V[9] ] ) ) ;
	ok( set( G.nitr( V[9] ) ).isequal( [ V[6] , V[7] , V[8] ] ) ) ;

	ok( set( G.dsitr( V[0] ) ).isequal( [ ] ) ) ;
	ok( set( G.dsitr( V[1] ) ).isequal( [ V[0] , V[4] ] ) ) ;
	ok( set( G.dsitr( V[2] ) ).isequal( [ V[0] , V[4] ] ) ) ;
	ok( set( G.dsitr( V[3] ) ).isequal( [ V[0] , V[4] ] ) ) ;
	ok( set( G.dsitr( V[4] ) ).isequal( [ ] ) ) ;
	ok( set( G.dsitr( V[5] ) ).isequal( [ ] ) ) ;
	ok( set( G.dsitr( V[6] ) ).isequal( [ V[5] , V[9] ] ) ) ;
	ok( set( G.dsitr( V[7] ) ).isequal( [ V[5] , V[9] ] ) ) ;
	ok( set( G.dsitr( V[8] ) ).isequal( [ V[5] , V[9] ] ) ) ;
	ok( set( G.dsitr( V[9] ) ).isequal( [ ] ) ) ;

	ok( set( G.dpitr( V[0] ) ).isequal( [ V[1] , V[2] , V[3] ] ) ) ;
	ok( set( G.dpitr( V[1] ) ).isequal( [ ] ) ) ;
	ok( set( G.dpitr( V[2] ) ).isequal( [ ] ) ) ;
	ok( set( G.dpitr( V[3] ) ).isequal( [ ] ) ) ;
	ok( set( G.dpitr( V[4] ) ).isequal( [ V[1] , V[2] , V[3] ] ) ) ;
	ok( set( G.dpitr( V[5] ) ).isequal( [ V[6] , V[7] , V[8] ] ) ) ;
	ok( set( G.dpitr( V[6] ) ).isequal( [ ] ) ) ;
	ok( set( G.dpitr( V[7] ) ).isequal( [ ] ) ) ;
	ok( set( G.dpitr( V[8] ) ).isequal( [ ] ) ) ;
	ok( set( G.dpitr( V[9] ) ).isequal( [ V[6] , V[7] , V[8] ] ) ) ;

	deepEqual( cardinality.len( G.edges( ) ) , 15 , "G.edges( ) length" ) ;

	const edges = set( E ) ;

	const seen = set( ) ;

	for ( let [ u , v , e ] of G.edges( ) ) {

		if ( seen.has( e ) ) continue ;

		ok( edges.has( e ) ) ;

		deepEqual( [ u , v ] , G.endpoints( e ) ) ;

		edges.remove( e ) ;

		seen.add( e ) ;

	}


	for ( let i of range( n ) ) {

		const X = [ for ( [ u ] of G.incident( V[i] ) ) u ] ;

		ok( X.length === 0 || set( [ V[i] ] ).isequal( X ) ) ;

		ok( set( [ for ( [ u , v , e ] of G.incident( V[i] ) ) e ] ).isequal(
			chain( [
				[ for ( [ u , v , e ] of G.ingoing( V[i] ) ) e ] ,
				[ for ( [ u , v , e ] of G.outgoing( V[i] ) ) e ]
			] )
		) ) ;

		ok( set( [ for ( [ u , v ] of G.incident( V[i] ) ) v ] ).isequal(
			chain( [
				[ for ( [ u , v ] of G.ingoing( V[i] ) ) v ] ,
				[ for ( [ u , v ] of G.outgoing( V[i] ) ) v ]
			] )
		) ) ;

		ok( set( [ for ( [ u ] of G.incident( V[i] ) ) u ] ).isequal(
			chain( [
				[ for ( [ u ] of G.ingoing( V[i] ) ) u ] ,
				[ for ( [ u ] of G.outgoing( V[i] ) ) u ]
			] )
		) ) ;

		ok( set( G.nitr( V[i] ) ).isequal( [ for ( [ _ , v ] of G.incident( V[i] ) ) v ] ) ) ;

	}

	delete_all_edges( ) ;

	deepEqual( cardinality.len( G.vitr( ) ) , 10 ) ;
	deepEqual( cardinality.len( G.eitr( ) ) , 0 ) ;

	delete_all_vertices( ) ;

	deepEqual( cardinality.len( G.vitr( ) ) , 0 ) ;
	deepEqual( cardinality.len( G.eitr( ) ) , 0 ) ;

} ) ;

} ;

exports.MultiDiGraph = MultiDiGraph ;
