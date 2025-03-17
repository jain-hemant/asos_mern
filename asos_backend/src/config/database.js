const mongoose = require("mongoose")
const { DB_URL } = require("./config")

const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URL)
        console.log("Database Connected Successfully... ")
    } catch (error) {
        console.log("Database Connection Failed... ")
    }
}
module.exports = connectToDB