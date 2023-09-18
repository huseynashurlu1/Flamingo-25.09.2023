const Brand = require('../models/brand');

// Create Brand
const createBrand = async (req, res) => {
    const brand = await Brand.create(req.body)
    res.json(brand)
}

// Get All Brands
const getBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (error) {
        throw new Error(error)
    }
}

// Delete Brand
const deleteBrand = async (req, res) => {
    const { id } = req.params
    try {
        const brand = await Brand.findByIdAndDelete(id);
        res.json(brand);
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {createBrand, getBrands, deleteBrand};
