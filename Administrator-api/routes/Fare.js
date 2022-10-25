const express = require('express');
const router = express.Router();
const fareController = require('../Controllers/faresController');

router.get('/getfares', fareController.getfares)

module.exports = router;