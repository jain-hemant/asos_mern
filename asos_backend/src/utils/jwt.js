const jwt = require("jsonwebtoken")
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require("../config/config")

const generateToken = async (isAccess = true, payload, expIn) => {
    try {
        const secretKey = isAccess ?
            JWT_ACCESS_SECRET : JWT_REFRESH_SECRET
        const token = await jwt.sign(payload, secretKey, { expiresIn: expIn })
        return token
    } catch (error) {
        console.log(error)
    }
}

const verifyToken = async (isAccess = true, token) => {
    try {
        const secretKey = isAccess ?
            JWT_ACCESS_SECRET : JWT_REFRESH_SECRET
        const payload = await jwt.verify(token, secretKey)
        return payload
    } catch (error) {
        console.log(error)
    }
}

module.exports = { generateToken, verifyToken }