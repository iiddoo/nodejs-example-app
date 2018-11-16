
const friendService = require('./friend.service');
const userService = require('./user.service');
const { connect } = require('./db');

module.exports = { friendService, connect, userService };
