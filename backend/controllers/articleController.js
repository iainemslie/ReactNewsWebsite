const asyncHandler = require('express-async-handler');

const Article = require('../models/articleModel');

// @desc    Get articles
// @route   GET /api/articles
// @access  Public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();

  res.status(200).json(articles);
});

// @desc    Create articles
// @route   POST /api/articles
// @access  Private
const createArticle = asyncHandler(async (req, res) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.author ||
    !req.body.content
  ) {
    res.status(400);
    throw new Error('Please add a title, description, author and content');
  }

  const article = await Article.create({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    content: req.body.content,
  });

  res.status(200).json(article);
});

// @desc    Modify article
// @route   PUT /api/articles/:id
// @access  Private
const modifyArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (!article) {
    res.status(400);
    throw new Error('Article not found');
  }

  const updateArticle = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateArticle);
});

// @desc    Delete article
// @route   DELETE /api/articles/:id
// @access  Private
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (!article) {
    res.status(400);
    throw new Error('Article not found');
  }

  await article.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getArticles, createArticle, modifyArticle, deleteArticle };
