const express = require('express');
const router = express.Router();
const Image = require('../models/Image')

// Get the list of images
router.get('/', async (req, res)=> {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        res.json({message: err})
    }
});

// Adds a image
router.post('/', async (req, res)=> {
    const image = new Image({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedImage = await image.save();
        res.json(savedImage)
    } catch (err) {
        res.json({message :err})
    }
});

// search for  image 
router.get('/:imageId', async (req, res) => {
    try {
        const image = await Image.findById(req.params.imageId)
        res.json(image);
    } catch(err){
        res.json({message: err})
    }
});

// delete image
router.delete('/:imageId', async (req, res) => {
    try {
        const removedImage = await Image.remove({ _id: req.params.imageId })
        res.json(removedImage)
    } catch(err){
        res.json({message: err})
    }
});

// update a image 
router.patch('/:imageId', async (req, res) => {
    try {
        const updatedImage = await Image.updateOne(
            { _id: req.params.imageId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedImage)
    } catch(err){
        res.json({message: err})
    }
});

module.exports = router