// require('dotenv').config();

module.exports = {
  mongoUrl: process.env.MONGO_URL,
  mongoUser: process.env.MONGO_USER,
  mongoPwd: process.env.MONGO_PWD,
  mongoDb: process.env.MONGO_DB,
  mongoRepSet: process.env.MONGO_REP_SET,
  mongoSSL: process.env.MONGO_SSL
};
