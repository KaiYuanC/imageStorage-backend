const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000
const DB_PASSWORD = process.env.DB_PASSWORD
const mongoose = require('mongoose')

//Middlewares
app.use('posts', ()=> {
    console.log('This is a middleware running')
})

const postsRoute = require('./routes/posts')

//Routes
app.use('/', postsRoute);
app.get('/posts', postsRoute);

//Connect to DB
mongoose.connect(`mongodb+srv://kaiyuan:${DB_PASSWORD}@images.67whs.mongodb.net/images?retryWrites=true&w=majority`, 
{ useUnifiedTopology: true }, 
()=> {
    console.log(`connected to DB!`)
});

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`)
})