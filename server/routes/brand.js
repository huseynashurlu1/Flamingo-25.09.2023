const express = require('express');
const router = express.Router();
const {createBrand, getBrands, deleteBrand} = require('../controllers/brand');

router.post('/add', createBrand);
router.get('/all-brands', getBrands);
router.delete('/:id', deleteBrand);

module.exports = router;