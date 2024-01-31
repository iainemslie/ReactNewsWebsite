const mongoose = require('mongoose');

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: ['true', 'Please add a title'],
    },
    description: {
      type: String,
      required: ['true', 'Please add a description'],
    },
    author: {
      type: String,
      required: ['true', 'Please add an author'],
    },
    content: {
      type: String,
      required: ['true', 'Please add a body'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Article', articleSchema);
