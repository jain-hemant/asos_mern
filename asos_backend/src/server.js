const app = require("./app")
const { PORT } = require("./config/config")
const connectToDB = require("./config/database")

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    connectToDB()
})