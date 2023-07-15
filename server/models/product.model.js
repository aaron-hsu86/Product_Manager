const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"] // can also validate min value on frontend
    },
    description: {
        type: String,
        required: [true, "Descripton is required"],
        minlength: [5, "Description must be at least 5 character long"]
    }
}, {timestamp: true})
const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;