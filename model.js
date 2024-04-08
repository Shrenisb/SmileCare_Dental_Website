const { Schema, default: mongoose } = require('mongoose')

const Book_Schema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    message: {
        type: String
    }
})

const Book = mongoose.model('Book', Book_Schema)
module.exports = { Book }