const asyncHandler = require('express-async-handler');

const Category = require('../models/categoryModel');

// @desc    Get categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json(categories);
});

// @desc    Create categories
// @route   POST /api/categories
// @access  Private
const createCategory = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a name');
  }

  const category = await Category.create({
    name: req.body.name,
  });

  res.status(200).json(category);
});

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private
const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(400);
    throw new Error('Category not found');
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedCategory);
});

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(400);
    throw new Error('Category not found');
  }

  await category.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
