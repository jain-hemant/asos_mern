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
        if (!user) response.status(404).json({ message: "No user found, Register first." })

        const isVarified = await verifyHash(password, user.password)
        if (!isVarified) response.status(403).json({ message: "Invalid creadintial" })
        const payload = {
            userId: user._id,
            name: user.name,
            role: user.role
        }
        const accessToken = await generateToken("ACCESS", payload, expIn = JWT_ACCESS_EXPIRE)
        const refreshToken = await generateToken("REFRESH", payload, expIn = JWT_REFRESH_EXPIRE)
        response.cookie("access", accessToken, { maxAge: JWT_ACCESS_EXPIRE })
        response.cookie("refresh", refreshToken, { maxAge: JWT_REFRESH_EXPIRE })
        response.status(200).json({ message: "Login successfuly", token: { accessToken, refreshToken } })
    } catch (error) {

    }
}

module.exports = { registerAuthController, loginAuthController }