
const mongo = require('./mongo');
const { loggerService } = require('./logger');
const authService = require('./auth');


// connect to mongodb
(async () => {
    try {
        await mongo.connect();
    } catch (error) {
        loggerService.error(error);
    }
})();

module.exports = { mongo,
                   loggerService,
                   authService };
