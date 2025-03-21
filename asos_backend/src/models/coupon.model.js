const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        discountPercentage: { type: Number, required: true },
        maxDiscountAmount: Number,
        validFrom: { type: Date, required: true },
        validTo: { type: Date, required: true },
        usageLimit: { type: Number, default: 1 },
        usedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Coupon", CouponSchema);
