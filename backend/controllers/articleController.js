const asyncHandler = require('express-async-handler');

// @desc    Get articles
// @route   GET /api/articles
// @access  Public
const getArticles = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Get Articles' });
});

// @desc    Create articles
// @route   POST /api/articles
// @access  Private
const createArticle = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Create Article' });
});

// @desc    Modify article
// @route   PUT /api/articles/:id
// @access  Private
const modifyArticle = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Modify Article' });
});

// @desc    Delete article
// @route   DELETE /api/articles/:id
// @access  Private
const deleteArticle = asyncHandler((req, res) => {
  res.status(200).json({ message: 'Delete Article' });
});

module.exports = { getArticles, createArticle, modifyArticle, deleteArticle };
