const express = require("express");
const validateApiKey = require("../middlewares/apiKeyMiddleware");
const cryptoNewsController = require("../controllers/cryptoNewsController");

const router = express.Router();

router.get("/crypto_news/:newsSource", validateApiKey, cryptoNewsController);

module.exports = router;
