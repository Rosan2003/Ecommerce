// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: {
//         type: Number,
//         require: true // cannot be null
//     },
//     isInStock: Boolean,
//     addedBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User" // from userModel
//     }
// });

// const Product = mongoose.model("Product",productSchema);
// module.exports = Product;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    brand: String,
    category: String,
    price: Number,
    countInStock: Number,
    rating: Number,
    numReviews: Number,
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

