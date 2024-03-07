const express = require("express");
const validateApiKey = require("../../middlewares/apiKeyMiddleware");
const assetHistoryController = require("../../controllers/Coinranking(rapidAPI)Controllers/assetHistoryController");
const assetDetailsController = require("../../controllers/Coinranking(rapidAPI)Controllers/assetDetailsController");
const assetController = require("../../controllers/Coinranking(rapidAPI)Controllers/assetController");

const router = express.Router();

router.get("/assets", validateApiKey, assetController);
router.get("/asset/:id", validateApiKey, assetDetailsController);
router.get("/asset/:id/history", validateApiKey, assetHistoryController);

module.exports = router;
