require("dotenv").config()
PORT = process.env.PORT || 9091
DB_URL = process.env.DB_URL
SALT_ROUND = Number(process.env.SALT_ROUND) || 6
JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET
JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET
module.exports = {
    PORT,
    DB_URL,
    SALT_ROUND,
    JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET,
}