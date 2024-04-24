const express = require('express');
const router = express.Router();
const api = require('./api');
const pages = require('./pages');

router.use('/api', express.json(), api);
router.use('/', pages);

module.exports = router;