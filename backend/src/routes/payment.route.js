const express = require("express");
const router = express.Router();

const paymentController = require('../controller/payment.controller');
const authenticate = require('../middleware/authenticate');

router.post("/:id", authenticate, paymentController.createPaymentLink);
router.get("/", authenticate, paymentController.updatePaymentInformation);

module.exports = router;