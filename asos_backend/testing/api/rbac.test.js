const { Router } = require("express")

const testRouter = Router()

testRouter.get("/rbac", (request, response, next) => {
    response.send("Dashboard")
})

module.exports = testRouter