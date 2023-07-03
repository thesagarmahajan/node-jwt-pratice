const jwt = require("jsonwebtoken")

const verify = (authHeader) => {
    const token = authHeader.split(" ")[1];
    let isValid = false;
    try {
        const decode = jwt.verify(token, "jayshreeram")
        isValid = true;
        return {decode, isValid, status:200}
    } catch (err) {
        switch (err.name) {
            case "TokenExpiredError":
                return {message:"Token Expired", status:401, isValid}
            case "JsonWebTokenError":
                return {message:"Invalid Signature", status:401, isValid}
            default:
                return {message:"Invalid Token", status:401, isValid}
        }
    }
}

module.exports = {verify}