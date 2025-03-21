const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
        amount: { type: Number, required: true },
        status: { type: String, enum: ["successful", "failed", "pending"], required: true },
        paymentMethod: { type: String, required: true },
        transactionId: { type: String, unique: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
