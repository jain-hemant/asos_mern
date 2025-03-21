const { Router } = require("express")
const { registerAuthController, loginAuthController, forgetAuthController } = require("../controllers/index")

const authRouter = Router()

authRouter.post("/register", registerAuthController)
authRouter.post("/login", loginAuthController)
authRouter.patch("/forget", forgetAuthController)

module.exports = authRouter