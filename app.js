const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(bodyParser.json());

// Constants
const PORT = process.env.PORT || 3000
const DB_PASSWORD = process.env.DB_PASSWORD

// Get Routers 
const postsRoute = require('./routes/posts')
const imagesRoute = require('./routes/images')

// Middlewares
app.use('posts', ()=> {
    console.log('This is a middleware running')
})

// Routes
app.use('/', postsRoute);

//Connect to DB
mongoose.connect(`mongodb+srv://kaiyuan:${DB_PASSWORD}@images.67whs.mongodb.net/images?retryWrites=true&w=majority`, 
{ useUnifiedTopology: true }, 
()=> {
    console.log(`connected to DB!`)
});

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`)
})