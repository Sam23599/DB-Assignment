const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255
    },
    description: String,
    SKU: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
    },
    inventoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory'
    },
    price: {
        type: Number,
        required: true
    },
    discountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: Date
});

const productCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: Date
});

const inventorySchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: Date
});

const discountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255
    },
    description: String,
    percentage: {
        type: Number,
        min: 0,
        max: 100
    },
    amount: {
        type: Number,
        min: 0
    },
    discountApplied: boolean,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: Date
});

module.exports = {
    Product: mongoose.model('Product', productSchema),
    ProductCategory: mongoose.model('ProductCategory', productCategorySchema),
    Inventory: mongoose.model('Inventory', inventorySchema),
    Discount: mongoose.model('Discount', discountSchema)
};