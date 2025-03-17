const { Router } = require("express")
const authRouter = require("./auth.routes")
const userRouter = require("./user.routes")
const routes = Router()

routes.use("/auth", authRouter)
routes.use("/user", userRouter)

module.exports = routes

