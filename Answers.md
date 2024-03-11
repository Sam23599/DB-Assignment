## Answers

1. The relationship between these two entities is one-to-many. 
Explaination- A product can belong to one category (indicated by the category_id foreign key in the Product table), but a category can have many products. This is a common relationship in e-commerce databases where products can be categorized to help users find them more easily.

2. There are 3 ways I can think of for this-
    a. Foreign Key Constraint: In this approach, the category_id column in the Product table can be defined as a foreign key that references the primary key (id) of the Product_Category table, preventing database from being inserted with an invalid category ID.
    b. Default Category: Define a default category, in the Product_Category table which will be assigned when no category is specified.
    c. Dropdown Menu: In the product creation/updation form, display a dropdown menu populated with valid categories from the Product_Category table. This helps users select a valid category and prevents them from entering an invalid ID.

3. Using mongoose with javascript-

```javascript
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

```