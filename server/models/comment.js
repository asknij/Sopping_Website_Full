const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({

    product: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    rating: {
        type: Intl,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
   
   


})

module.exports = mongoose.model('comments', commentSchema)