'use strict';

require( 'dotenv' ).config();

const express = require( 'express' );
const app = express();

const cors = require( 'cors' );
app.use( cors() );

const mongoose = require( 'mongoose' );
mongoose.connect('mongodb://localhost:27017/book-app')



app.use( express.json() );

const handleGetBooks = require( './handleGetBooks' );
const createNewBook = require( './createNewBook' );
const updateBook = require( './updateBook' );
const deleteBook = require( './deleteBook' );



const PORT = process.env.PORT || 3002;
app.listen( PORT, () => console.log( `listening on ${PORT}` ) );

app.get( '/test', ( _request, response ) => {
  response.send( 'test request received' );
} );

app.get( '/', ( _request, response ) => {
  response.send( 'Hello World!' );
} );


app.get( '/book', handleGetBooks );
app.post( '/book', createNewBook );
app.put( '/book/:id', updateBook );
app.delete( '/book/:id', deleteBook );