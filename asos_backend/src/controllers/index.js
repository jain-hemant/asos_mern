const { registerAuthController, loginAuthController } = require("./auth.controller")
const { userReadAllController, userReadController, userUpdateController, userDeleteController } = require("./user.controller")

module.exports = {
    registerAuthController,
    loginAuthController,
    userReadAllController,
    userReadController,
    userUpdateController,
    userDeleteController
}