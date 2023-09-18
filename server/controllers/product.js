const Product = require('../models/product');
const fs = require('fs');
const path = require('path');


const createProduct = async (req, res) => {
    try {
      const { name, description, price, shipping,categoryId, subCategoryId, brandId } = req.body;

      // Access the uploaded file (if it exists)
      const uploadedFile = req.file;
        console.log(req.file)
      if (!uploadedFile) {
        return res.status(400).send('No file uploaded.');
      }
  
      const newProduct = new Product({
        name,
        description,
        price,
        image:uploadedFile.filename, 
        shipping,
        categoryId,
        subCategoryId,
        brandId,
      });
  
      // Save the product to the database
      const savedProduct = await newProduct.save();
  
      // Respond with a success message or the saved product
      res.status(201).json(savedProduct);
    } catch (error) {
      // Handle errors
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };


// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        throw new Error(error)
    }
}

// Get All Products
const getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        throw new Error(error)
    }
}


// Get Products By Category
const getProductByCategory = async (req, res) => {
    const { id } = req.params
    try {
        const products = await Product.find({ categoryId: id }).populate('brandId').populate('subCategoryId');
        res.json(products);
    } catch (error) {
        throw new Error(error)
    }
}


// Delete Product
const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id);
        
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Delete the product's image from the uploads folder
        const imagePath = path.join(__dirname, '../uploads', product.image);
        fs.unlinkSync(imagePath); // Delete the file synchronously

        // Delete the product from the database
        await Product.findByIdAndDelete(id);

        res.json(product);
    } catch (error) {
        throw new Error(error)
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { discount, discountedPrice } = req.body;

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Güncelleme yapılacak alanları güncelle
        if (discount !== undefined) {
            product.discount = true;
        }

        if (discountedPrice !== undefined) {
            product.discountedPrice = discountedPrice;
        }

        // Product kaydet
        const updatedProduct = await product.save();

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the product.' });
    }
}

// Increase Product View
const increaseView = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(productId, { $inc: { viewCount: 1 } }, { new: true });

        res.json({ product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the view count.' });
    }
}

module.exports = {createProduct, getProducts, getProductById, getProductByCategory, deleteProduct, increaseView, updateProduct};
