const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  imageUrl: {
    type: String,
    required: true
  },
  liked: {
    type: Boolean,
    required: true
  },
  date: {
      type: Date,
      default: Date.now
  }
});

module.exports = {
  Photo: mongoose.model("image", ImageSchema)
};