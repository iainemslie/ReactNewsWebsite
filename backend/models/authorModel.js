const mongoose = require('mongoose');

const authorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: ['true', 'Please add a first name'],
    },
    lastName: {
      type: String,
      required: ['true', 'Please add a last name'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Author', authorSchema);
