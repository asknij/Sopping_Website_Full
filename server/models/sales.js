const mongoose = require('mongoose')

const slesSchema = new mongoose.Schema({
    id: {
        type: Intl,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
   
   


})

module.exports = mongoose.model('sales', salesSchema)