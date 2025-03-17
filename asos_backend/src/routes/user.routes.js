const { Router } = require("express")

const userRouter = Router()

userRouter.get("/")
userRouter.get("/:id")
userRouter.patch("/")
userRouter.delete("/")

module.exports = userRouter