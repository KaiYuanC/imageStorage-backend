const express = require('express');
const router = express.Router();
hello = require('../controllers/hello')
const Post = require('../models/Post')

router.get('/', hello.hello)

router.get('/posts', (req, res)=> {
    res.send('we are on posts')
});

router.post('/', (req, res)=> {
    console.log(req.body);
});

module.exports = router