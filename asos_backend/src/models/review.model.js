const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        rating: { type: Number, min: 1, max: 5, required: true },
        review: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
