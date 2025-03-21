require("dotenv").config()
const PORT = process.env.PORT || 9091
const DB_URL = process.env.DB_URL
const SALT_ROUND = 5 //Number(process.env.SALT_ROUND)
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET
const JWT_ACCESS_EXPIRE = Number(process.env.JWT_ACCESS_EXPIRE) * 1
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET
const JWT_REFRESH_EXPIRE = Number(process.env.JWT_REFRESH_EXPIRE) * 2
module.exports = {
    PORT,
    DB_URL,
    SALT_ROUND,
    JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRE,
    JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRE
}