const express = require('express');

const router = express.Router();

router.use('/', require('./friend.routes'));

module.exports = router;
