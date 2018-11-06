const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('OK');
});

router.use('/', require('./friend.routes'));

module.exports = router;
