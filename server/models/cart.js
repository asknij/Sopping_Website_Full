const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    id: {
        type: Intl,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    quantity: {
        type: Intl,
        required: true
    },
})

module.exports = mongoose.model('carts', cartSchema)