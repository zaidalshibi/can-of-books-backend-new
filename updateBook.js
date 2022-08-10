const mongoose = require('mongoose');
const BooksSchema = require('./Schema');
const BookModel = mongoose.model('BookModel', BooksSchema);


function updateBook(req, res) {
    const id = req.params.id;
    console.log(id);
    const {data} = req.body;
    console.log(data);

    BookModel.findByIdAndUpdate(id, data, {new: true}).then(record => {
        res.send(record);
    }).catch(err => {
        console.log(err)
        res.status(500).send(err.message);
    })
}

module.exports = updateBook;