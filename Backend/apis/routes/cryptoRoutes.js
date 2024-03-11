// routes/dataRoutes.js
const express = require("express");
const {
  fetchAssets,
  fetchAssetIcons,
  fetchAssetHistory,
} = require("../controllers/cryptoControllers/assetsController");
const validateApiKey = require("../middlewares/apiKeyMiddleware");
const {
  fetchExchanges,
  fetchExchangeIcons,
} = require("../controllers/cryptoControllers/exchangeController");
const assetPriceController = require("../controllers/cryptoControllers/assetPriceController");
const cryptoNewsController = require("../controllers/cryptoNewsController");
const cryptoInfoController = require("../controllers/cryptoControllers/cryptoInfoController");

const router = express.Router();

router.get("/marketdata/assets", validateApiKey, fetchAssets);
router.get("/marketdata/stats", validateApiKey, cryptoInfoController);
router.get("/marketdata/assetPrice", validateApiKey, assetPriceController);
router.get("/marketdata/asset/:id/history", validateApiKey, fetchAssetHistory);
router.get("/marketdata/assetIcons", validateApiKey, fetchAssetIcons);
router.get("/marketdata/exchanges", validateApiKey, fetchExchanges);
router.get("/marketdata/exchangeIcons", validateApiKey, fetchExchangeIcons);
router.get("/crypto_news/:newsSource", validateApiKey, cryptoNewsController);

module.exports = router;
