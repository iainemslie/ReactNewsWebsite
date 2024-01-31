const express = require('express');
const router = express.Router();
const {
  getArticles,
  createArticle,
  modifyArticle,
  deleteArticle,
} = require('../controllers/articleController');

router.route('/').get(getArticles).post(createArticle);

router.route('/:id').put(modifyArticle).delete(deleteArticle);

module.exports = router;
