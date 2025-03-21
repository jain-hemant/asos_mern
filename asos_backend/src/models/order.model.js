const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    size: String,
    quantity: Number,
    price: Number,
});

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        products: [OrderItemSchema],
        totalAmount: { type: Number, required: true },
        status: { type: String, enum: ["pending", "shipped", "delivered", "cancelled"], default: "pending" },
        paymentMethod: { type: String, enum: ["card", "UPI", "COD"], required: true },
        shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: "User.address" },
        trackingId: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
