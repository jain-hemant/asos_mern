const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {2
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensure email is unique
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, 'Please provide a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
    phone: {
        type: String,
        require: true,
        minlength: 10,
        maxLength: 10
    },
    gender: { type: String, require: true },
    address: {
        country: { type: String, require: true },
        state: { type: String, require: true },
        district: { type: String, require: true },
        city: { type: String, require: true },
        zip: { type: String, require: true },
        latitude: { type: String },
        longitude: { type: String },
    },
    createdAt: { type: Date, default: Date.now },
}, { versionKey: false })

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel