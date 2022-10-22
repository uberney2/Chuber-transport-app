const express = require('express');
const router = express.Router();
const registerServiceController = require('../Controllers/registerServiceController');

router.get('/show', registerServiceController.showService)
router.post('/add', registerServiceController.addService)
router.put('/confirmservice', registerServiceController.confirmService)
router.put('/cancelservice', registerServiceController.cancelService)
router.put('/finishservice', registerServiceController.finishService)

module.exports = router;