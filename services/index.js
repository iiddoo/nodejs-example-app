
const mongo = require('./mongo');
const { loggerService } = require('./logger');

// connect to mongodb
(async () => {
    try {
        await mongo.connect();
    } catch (error) {
        loggerService.error(error);
    }
})();

module.exports = { friendService: mongo.friendService, loggerService };
