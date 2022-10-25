const express = require('express');
const router = express.Router();
const registerServiceController = require('../Controllers/registerServiceController'); 

router.post('/add', registerServiceController.createInitialService);
router.put('/confirmservice', registerServiceController.confirmService);

module.exports = router;