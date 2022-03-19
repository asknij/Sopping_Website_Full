
const express= require('express');
const bodyParser= require('body-parser');
const cors= require('cors');
const mongoose = require('mongoose');

const app= express();
//midware
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost/online-shop', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

//routes

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)
const commentsRouter = require('./routes/comments')
app.use('/comments', commentsRouter)
const cartRouter = require('./routes/carts')
app.use('/carts', cartRouter)


const port=process.env.PORT||5000;
app.listen(port, () => console.log("Server started on port "+ port));