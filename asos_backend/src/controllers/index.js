const { registerAuthController, loginAuthController, forgetAuthController } = require("./auth.controller")
const { userReadAllController, userReadController, userUpdateController, userDeleteController } = require("./user.controller")

module.exports = {
    registerAuthController,
    loginAuthController,
    forgetAuthController,
    userReadAllController,
    userReadController,
    userUpdateController,
    userDeleteController
}