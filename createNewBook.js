const mongoose = require('mongoose');
const BooksSchema = require('./Schema');
const BookModel = mongoose.model('BookModel', BooksSchema);



function createNewBook(req, res) {
    
    const {newBook} = req.body;
    const book = new BookModel(newBook);
    book.save();
    res.status(201).json(book);
}

module.exports = createNewBook;