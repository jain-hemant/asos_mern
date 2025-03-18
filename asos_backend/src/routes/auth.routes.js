const { Router } = require("express")
const { registerAuthController, loginAuthController } = require("../controllers/index")

const authRouter = Router()

authRouter.post("/register", registerAuthController)
authRouter.post("/login", loginAuthController)

module.exports = authRouter