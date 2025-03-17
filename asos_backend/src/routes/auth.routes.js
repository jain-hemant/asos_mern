const { Router } = require("express")

const authRouter = Router()

authRouter.post("/register")
authRouter.post("/login")

module.exports = authRouter