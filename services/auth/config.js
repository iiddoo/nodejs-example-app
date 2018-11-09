
module.exports = {
    expiresIn: process.env.JWT_EXPIRES,
    issuer: process.env.JWT_ISSUER,
    secret: process.env.JWT_SECRET
};
 