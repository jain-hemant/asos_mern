const express = require("express")
const cookieParser = require("cookie-parser")
const routes = require("./routes")
// start testing import 
const testRouter = require("../testing/api/rbac.test")
const accessControl = require("./middlewares/auth/rbac.middleware")
// end testing import
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/api/v1", routes)
app.use("/api/v1/test", accessControl(["ADMIN"]), testRouter)

module.exports = app