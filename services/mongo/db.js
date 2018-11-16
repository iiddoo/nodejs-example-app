
const mongoose = require('mongoose');
const {
  mongoUrl,
  mongoUser,
  mongoPwd,
  mongoDb,
  mongoRepSet,
  mongoSSL
} = require('./config');

/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${mongoUser}:${mongoPwd}@${mongoUrl}/${mongoDb}?ssl=${mongoSSL}&replicaSet=${mongoRepSet}&authSource=admin&retryWrites=true`;

const connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoUri, {
      autoReconnect: true,
      reconnectTries: 1000000,
      reconnectInterval: 3000,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('MongoDB is connected');
      resolve();
    })
    .catch(error => {
      reject(error);
    });
  });
};

process.on('SIGINT', () => {
  // If the Node process ends, close the Mongoose connection
  mongoose.connection.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0);
  });
});

module.exports = { connect };
