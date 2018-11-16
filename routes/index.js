const express = require('express');
const router = express.Router();
const { validate } = require('../services').authService;

router.get('/', (req, res) => {
    res.status(200).send('OK');
});

router.use('/', require('./login.routes'));

// protected routes
router.use(validate, require('./friend.routes'));
router.use(validate, require('./user.routes'));

module.exports = router;
