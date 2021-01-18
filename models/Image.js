
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: {
    type: String,
    ref: "user"
  },
  imageUrl: {
    type: String,
    required: true
  },
  liked: {
    type: Boolean,
    required: true
  }
});

module.exports = {
  Photo: mongoose.model("image", ImageSchema)
};