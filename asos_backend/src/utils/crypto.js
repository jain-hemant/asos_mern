const brcypt = require("bcrypt")
const { SALT_ROUND } = require("../config/config")

const generateHash = async (data) => {
    try {
        const isHashed = await brcypt.hash(data, SALT_ROUND)
        return isHashed
    } catch (error) {
        console.log(error);
    }
}

const verifyHash = async (userData, hashData) => {
    try {
        const isVerified = await brcypt.compare(userData, hashData)
        return isVerified
    } catch (error) {
        console.log(error);
    }
}

module.exports = { generateHash, verifyHash }