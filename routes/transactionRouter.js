const express = require('express');
const router = express.Router();

const userController = require('../controllers/transactionController.js');

router.put('/payment', userController.payment);

module.exports = router;