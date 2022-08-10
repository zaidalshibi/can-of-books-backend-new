const mongoose = require('mongoose');
const BooksSchema = require('./Schema');
const BookModel = mongoose.model('BookModel', BooksSchema);

function deleteBook(req, res) {
    const id = req.params.id;
    BookModel.findByIdAndDelete(id).then(record => {
        res.send(record);
    }).catch(err => {
        console.log(err)
        res.status(500).send(err.message);
    })
}

module.exports = deleteBook;