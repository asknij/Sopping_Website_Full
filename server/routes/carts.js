const express = require('express')
const router = express.Router()
const Cart = require('../models/cart')


// Getting all
router.get('/:user', async(req, res) => {
    try {

        var cart = await model.find({
            "cart.user": "user"
          })
        res.json(cart)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// Creating one
router.post('/', async(req, res) => {
    const cart = new Cart({
        user: req.body.user,
        quantity: req.body.quantity,
        product:req.body.Product,
        
    
    })
    try {
        if(req.body.quantity>0){
            const newCart = await cart.save()
            res.status(201).json(newCart)
        }
        else{
            res.status(400).json({ message: "insufficient quantity" })
        }
        
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router