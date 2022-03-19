const express = require('express')
const router = express.Router()
const Product = require('../models/product')


// Getting all
router.get('/', async(req, res) => {
    try {
        const product = await Product.find()
        res.json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getProduct(req, res, next) {
    let product
    try {
        product = await Product.findById(req.params.id)
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find product' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.product = product
    next()
}


module.exports = router