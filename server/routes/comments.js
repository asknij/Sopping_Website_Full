const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')


// Getting all
router.get('/:product', async(req, res) => {
    try {

        var comments = await model.find({
            "comment.product": "product"
          })
        res.json(comments)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// Creating one
router.post('/', async(req, res) => {
    const comment = new Comment({
        user: req.body.user,
        comment: req.body.comment,
        rating: req.body.rating,
        product:req.body.Product,
        
    
    })
    try {
        const newComment = await comment.save()
        res.status(201).json(newComment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router