const express = require("express");
const router = express.Router();
const {register, login} = require('../controller/auth.controller');

router.post("/signup", register);
router.post("/signin", login);

module.exports = router;