const mongoose = require('mongoose'); 


var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    shipping : {
        type: Boolean,
        required: true
    },
    discount: {
        type: Boolean,
        default: false,
    },
    discountedPrice : {
        type: Number,
        default: 0,
    },
    viewCount: {
        type: Number,
        default: 0
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required:true
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required:true
    },
});

module.exports = mongoose.model('Product', productSchema);