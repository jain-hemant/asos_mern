const { TokenExpiredError } = require("jsonwebtoken")
const { verifyToken, generateToken } = require("../../utils/jwt")
const { JWT_ACCESS_EXPIRE, JWT_REFRESH_EXPIRE } = require("../../config/config")

const accessControl = (roles) => {
    return async (request, response, next) => {
        // console.log("JWT_ACCESS_EXPIRE - ", JWT_ACCESS_EXPIRE)
        // console.log("JWT_REFRESH_EXPIRE - ", JWT_REFRESH_EXPIRE)
        try {
            let newAccessToken = ""
            let newPayload = {}
            const accessToken = request.cookies.access
            const refreshToken = request.cookies.refresh
            // console.log("Access Token - ", accessToken);
            // console.log("Refresh Token - ", refreshToken);

            if (!refreshToken && !accessToken) {
                return response.status(401).json({ message: "Refresh Token Expired, Login Again" })
            }
            if (refreshToken && !accessToken) {
                // console.log("Access Token Expired.");
                const verifyRefresh = await verifyToken("REFRESH", refreshToken)
                if (!verifyRefresh) {
                    return response.status(401).json({ message: "Token Expired" })
                }
                newPayload = {
                    userId: verifyRefresh.userId,
                    name: verifyRefresh.name,
                    role: verifyRefresh.role
                }
                // console.log("verify refresh -- ", newPayload)
                newAccessToken = await generateToken("ACCESS", newPayload, JWT_ACCESS_EXPIRE)
                // console.log("New Access Token - ", newAccessToken);

                response.cookie("access", newAccessToken, { maxAge: JWT_ACCESS_EXPIRE })
            }
            const payload = await verifyToken("ACCESS", accessToken || newAccessToken)
            const userRole = payload.role
            if (!roles || !roles.includes(userRole)) {
                return response.status(403).json({ message: "You're not authorized." })
            }
            return next()
        } catch (error) {
            next(error)
        }
    }
}
module.exports = accessControl
