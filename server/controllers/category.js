const Category = require('../models/category');
const SubCategory = require('../models/subCategory');

// Create Category 
const createCategory = async (req, res) => {
    const category = await Category.create(req.body)
    res.json(category)
}

const addSubCategory = async (req, res) => {
    const category = await SubCategory.create(req.body)
    res.json(category)
}

const getSubCategoriesByCategoryId = async (req, res) => {
    const { categoryId } = req.params;

    try {
        const subCategories = await SubCategory.find({ categoryId: categoryId });

        if (!subCategories) {
            return res.status(404).json({ message: 'Belirtilen kategoriye ait alt kategori bulunamadı.' });
        }

        res.json(subCategories);
    } catch (error) {
        throw new Error(error);
    }
}

// Get All Categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        const sub_categories = await SubCategory.find();
        res.json({
            categories, sub_categories
        });
    } catch (error) {
        throw new Error(error)
    }
}


// Delete Category
const deleteCategory = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findByIdAndDelete(id);
        res.json(category);
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {createCategory, getCategories, deleteCategory, addSubCategory, getSubCategoriesByCategoryId};
