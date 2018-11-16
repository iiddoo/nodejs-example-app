const jwt = require('jsonwebtoken');
const login = require('./login.service');
const { secret } = require('./config');

module.exports = async (req, res, next) => {
  // const token = req.body.token || req.query.token || req.headers['x-access-token'];
  const token = req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({"error": true, "message": 'Unauthorized access. ' });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({"error": true, "message": 'Unauthorized access. ' });
  }
};