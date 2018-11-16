
const winston = require('winston');
require('winston-daily-rotate-file');
const path = require('path');

const {
  loggerFolder,
  loggerLevel
} = require('./config');

const logger = winston.createLogger({
  level: loggerLevel,
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `%DATE%.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: path.join(loggerFolder, '/error.log'), level: 'error' }),
    new winston.transports.DailyRotateFile({
      filename: path.join(loggerFolder, '/%DATE%.log'),
      datePattern: 'DD-MM-YYYY',
      zippedArchive: false,
      maxSize: '20m',
      maxFiles: '2d'
    })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
};

module.exports = logger;
