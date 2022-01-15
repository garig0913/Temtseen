const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  projectDesc: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
