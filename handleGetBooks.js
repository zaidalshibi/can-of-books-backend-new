const BooksModel = require( './booksModel' );

function handleGetBooks(req, res) {
    try{
    BooksModel.find({}, (error, data) => {
        if (error) console.log(`error reading from the db: ${error}`);
        else res.send(data);
    })
}
    catch(error) {
        console.log(`error: ${error}`);
    }
}

module.exports = handleGetBooks;