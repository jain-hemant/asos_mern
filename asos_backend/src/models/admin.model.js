const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        passwordHash: { type: String, required: true },
        role: { type: String, enum: ["superadmin", "moderator"], default: "moderator" },
        permissions: [String], // e.g., ['manage-products', 'manage-orders']
    },
    { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
