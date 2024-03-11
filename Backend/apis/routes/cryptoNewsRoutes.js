const express = require("express");
const validateApiKey = require("../middlewares/apiKeyMiddleware");
const cryptoNewsController = require("../controllers/cryptoNewsController");

const router = express.Router();

module.exports = router;
