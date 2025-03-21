const { JWT_ACCESS_EXPIRE, JWT_REFRESH_EXPIRE } = require("../config/config")
const UserModel = require("../models/user.model")
const { generateHash, verifyHash } = require("../utils/crypto")
const { generateToken } = require("../utils/jwt")

const registerAuthController = async (request, response, next) => {
    try {
        const userData = request.body
        const hashPassword = await generateHash(userData.password)
        await UserModel.create({ ...userData, password: hashPassword })
        response.status(201).json({ message: "user created sucessfully" })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const loginAuthController = async (request, response, next) => {
    try {
        const { email, password } = request.body
        const user = await UserModel.findOne({ email: email }).select("+password")
        if (!user) return response.status(404).json({ message: "No user found, Register first." })

        const isVarified = await verifyHash(password, user.password)
        if (!isVarified) return response.status(403).json({ message: "Invalid creadintial" })
        const payload = {
            userId: user._id,
            name: user.name,
            role: user.role
        }
        const accessToken = await generateToken("ACCESS", payload, expIn = JWT_ACCESS_EXPIRE)
        const refreshToken = await generateToken("REFRESH", payload, expIn = JWT_REFRESH_EXPIRE)
        response.cookie("access", accessToken, { maxAge: JWT_ACCESS_EXPIRE })
        response.cookie("refresh", refreshToken, { maxAge: JWT_REFRESH_EXPIRE })
        return response.status(200).json({ message: "Login successfuly", token: { accessToken, refreshToken } })
    } catch (error) {
        next(error)
    }
}

const forgetAuthController = async (request, response, next) => {
    try {
        const { forgetType } = request.body
        if (!forgetType) {
            return response.status(400).json({ message: "Forget type should be define must." })
        }
        if (forgetType === "password") {
            const { email, newPassword } = request.body
            if (!email || !newPassword) {
                return response.status(400).json({ message: "Email & new password is required." })
            }
            const user = await UserModel.findOne({ email: email })
            if (!user) {
                response.status(404).json({ message: "User not found." })
            }
            const hashPassword = await generateHash(newPassword)
            await UserModel.findOneAndUpdate({ email: user.email }, { $set: { password: hashPassword } }, { new: true })
            response.status(200).json({ message: "Password changed successfuly" })
        }

    } catch (error) {
        next(error)
    }
}

module.exports = { registerAuthController, loginAuthController, forgetAuthController }