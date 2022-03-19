const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productid: {
        type: Intl,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image7: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    image3: {
        type: String,
        required: true
    },
    image4: {
        type: String,
        required: true
    },
    image5: {
        type: String,
        required: true
    },
    image6: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    specification: {
        type: String,
        required: true
    },
    return_policy: {
        type: String,
        required: true
    },
    warrenty: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('products', productSchema)