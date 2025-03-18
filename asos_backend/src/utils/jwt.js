const jwt = require("jsonwebtoken")
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require("../config/config")

const generateToken = async (tokenType = "ACCESS", payload, expIn) => {
    try {
        const secretKey = tokenType === "ACCESS" ?
            JWT_ACCESS_SECRET : JWT_REFRESH_SECRET
        const token = jwt.sign(payload, secretKey, { expiresIn: expIn })
        return token
    } catch (error) {
        console.log(error)
    }
}

const verifyToken = async (tokenType = "ACCESS", token) => {
    try {
        const secretKey = tokenType === "ACCESS" ?
            JWT_ACCESS_SECRET : JWT_REFRESH_SECRET
        const payload = await jwt.verify(token, secretKey)
        return payload
    } catch (error) {
        console.log(error)
    }
}

module.exports = { generateToken, verifyToken }