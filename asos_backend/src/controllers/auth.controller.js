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
        const user = await UserModel.findOne({ email: email })
        if (!user) response.status(404).json({ message: "No user found. login again" })

        const isVarified = await verifyHash(password, user.password)
        if (!isVarified) response.status(403).json({ message: "Invalid creadintial" })
        const accessToken = generateToken()

    } catch (error) {

    }
}

module.exports = { registerAuthController, loginAuthController }