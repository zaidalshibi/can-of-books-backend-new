const mongoose = require('mongoose');



const BooksSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean
});

module.exports = BooksSchema