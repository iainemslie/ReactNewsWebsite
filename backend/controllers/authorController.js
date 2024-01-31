const asyncHandler = require('express-async-handler');

const Author = require('../models/authorModel');

// @desc    Get authors
// @route   GET /api/authors
// @access  Public
const getAuthors = asyncHandler(async (req, res) => {
  const authors = await Author.find();

  res.status(200).json(authors);
});

// @desc    Create articles
// @route   POST /api/articles
// @access  Private
const createAuthor = asyncHandler(async (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400);
    throw new Error('Please add a firstName and lastName');
  }

  const author = await Author.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  res.status(200).json(author);
});

// @desc    Update author
// @route   PUT /api/authors/:id
// @access  Private
const updateAuthor = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);

  if (!author) {
    res.status(400);
    throw new Error('Author not found');
  }

  const updatedAuthor = await Author.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedAuthor);
});

// @desc    Delete author
// @route   DELETE /api/authors/:id
// @access  Private
const deleteAuthor = asyncHandler(async (req, res) => {
  const author = await Author.findById(req.params.id);

  if (!author) {
    res.status(400);
    throw new Error('Author not found');
  }

  await author.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getAuthors, createAuthor, updateAuthor, deleteAuthor };
