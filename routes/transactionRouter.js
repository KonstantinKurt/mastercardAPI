const express = require('express');
const router = express.Router();

const userController = require('../controllers/transactionController.js');

router.put('/payment', userController.payment); //transaction ‘payment’ request and response;

module.exports = router;