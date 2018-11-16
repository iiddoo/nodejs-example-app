const express = require('express');
const { login } = require('../services').authService;

const router = express.Router();

router.get('/login', (req, res) => {
  login(req, res);
});

module.exports = router;