const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number, min: 1, max: 5 },
    review: String,
    createdAt: { type: Date, default: Date.now },
});

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: String,
        brand: String,
        category: String,
        subCategory: String,
        price: { type: Number, required: true },
        discount: { type: Number, default: 0 },
        sizes: [String],
        colors: [String],
        images: [String],
        stock: { type: Number, required: true },
        ratings: [RatingSchema],
        salesCount: { type: Number, default: 0 }, // Tracks number of sales
        seller: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
            name: { type: String, required: true },
            businessName: { type: String }
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
