
const mongoService = require('./mongo');
const { loggerService } = require('./logger');
const authService = require('./auth');


// connect to mongodb
(async () => {
    try {
        await mongoService.connect();
    } catch (error) {
        loggerService.error(error);
    }
})();

module.exports = { mongoService,
                   loggerService,
                   authService };
