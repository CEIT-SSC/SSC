const express = require( 'express' );
const path = require( 'path' );
const app = express();

app.use( express.static( 'dist' ) ); // Serve static files from dist

// Serve specific folders directly
app.use( '/assets', express.static( path.join( __dirname, 'dist/assets' ) ) );
app.use( '/charting_library', express.static( path.join( __dirname, 'dist/charting_library' ) ) );
app.use( '/datafeeds', express.static( path.join( __dirname, 'dist/datafeeds' ) ) );

// All other routes should redirect to the index.html
app.get( '*', ( req, res ) => {
	res.sendFile( path.join( __dirname, 'dist/index.html' ) );
} );

const PORT = process.env.PORT || 8080;
app.listen( PORT, () => console.log( `Server running on port ${ PORT }` ) );
