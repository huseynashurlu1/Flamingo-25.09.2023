const express = require('express');
const router = express.Router();
const {createCategory, getCategories, deleteCategory, addSubCategory, getSubCategoriesByCategoryId} = require('../controllers/category');

router.post('/add', createCategory);
router.get('/all-categories', getCategories);
router.delete('/:id', deleteCategory);
router.get('/subcategories/:categoryId', getSubCategoriesByCategoryId);
router.post('/:categoryId/add-subcategory', addSubCategory);

module.exports = router;