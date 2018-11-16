
const express = require('express');
const { loggerService } = require('../services');
const { userService } = require('../services').mongoService;

const router = express.Router();

router.get('/users', (req, res) => {
  loggerService.log({
    level: 'info',
    message: 'Requested all users'
  });
  userService.getUsers(req, res);
});

module.exports = router;
