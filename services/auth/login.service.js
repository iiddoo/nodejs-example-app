const jwt = require('jsonwebtoken');
const { userService } = require('../mongo');
const {
  issuer,
  expiresIn,
  secret,
  environment
} = require('./config');

module.exports = async (req, res) => {
  try {
    let uid = null;
    // grab user id from web host (Apache, IIS, Enginx etc.) or locally for dev mode
    if (environment === 'development') {
      const username = require('username');
      uid = await username();
    } else {
      // TODO: set username from web host
    }  
    // TODO: get name from Active Directory
    const name = 'My Name';
    // TODO: set user autorization from AD group
    const admin = false;
    const user = {
      uid,
      name,
      admin
    };
    const token = jwt.sign(user, secret, { expiresIn, issuer });
    // update db with new login user
    await userService.login(user);
    // send back the new token
    res.status(200).json(token);  
  } catch (error) {
    return res.status(500).json({"error": true, "message": 'Unable to authenticate user. ' });
  }
};
