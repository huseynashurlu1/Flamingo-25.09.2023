const express = require('express');
const router = express.Router();
const {createCategory, getCategories, deleteCategory, addSubCategory, getSubCategoriesByCategoryId} = require('../controllers/category');

router.post('/add', createCategory);
router.post('/:categoryId/add-subcategory', addSubCategory);
router.get('/all-categories', getCategories);
router.get('/subcategories/:categoryId', getSubCategoriesByCategoryId);
router.delete('/:id', deleteCategory);

module.exports = router;