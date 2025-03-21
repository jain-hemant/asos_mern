const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    country: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    latitude: { type: String },
    longitude: { type: String },
}, { _id: false });

const CartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    size: String,
    quantity: { type: Number, required: true, default: 1 },
}, { _id: false });

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please provide a valid email address'],
    },
    emailVerified: { type: Boolean, default: false }, // Email verification status
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxLength: 10,
        unique: true,
    },
    phoneVerified: { type: Boolean, default: false }, // Phone verification status
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false,
    },
    role: { type: String, enum: ["Customer", "Seller"], default: "Customer" },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    profilePicture: { type: String, default: null }, // Profile Image URL
    address: AddressSchema,
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // User Wishlist
    cart: [CartItemSchema], // User Cart
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // User Orders
    accountStatus: { type: String, enum: ["Active", "Suspendad", "Banned"], default: "Active" }, // Account status
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    // Seller-specific fields
    businessName: { type: String, trim: true },
    gstNumber: { type: String, trim: true },
    sellerDocuments: [{ type: String }], // Can store document URLs
}, { versionKey: false, timestamps: true });

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
