const express = require("express");
const validateApiKey = require("../../middlewares/apiKeyMiddleware");
const assetHistoryController = require("../../controllers/Coinranking(rapidAPI)Controllers/assetHistoryController");

const router = express.Router();

router.get("/asset/:id/history", validateApiKey, assetHistoryController);

module.exports = router;
