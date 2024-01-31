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
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Author',
    },
    content: {
      type: String,
      required: ['true', 'Please add a body'],
    },
    // tags: {
    //   type: [String],
    // },
    // views: {
    //   type: Number,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Article', articleSchema);
