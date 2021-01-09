const mongoose = require("mongoose");

const NewArticle = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: true,
    maxlength: 2000,
  },
});

module.exports = mongoose.model("NewArticle", NewArticle);
