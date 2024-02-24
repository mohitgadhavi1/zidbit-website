// routes/dataRoutes.js
const express = require("express");
const {
  fetchAssets,
  fetchAssetIcons,
} = require("../controllers/assetsController");
const validateApiKey = require("../middlewares/apiKeyMiddleware");
const {
  fetchExchanges,
  fetchExchangeIcons,
} = require("../controllers/exchangeController");
const assetPriceController = require("../controllers/assetPriceController");

const router = express.Router();
// const fetchDataMiddleware = require("../middlewares/fetchDataMiddleware");
// const {
//   saveExchanges,
//   saveAssetIcons,
//   saveExchangeIcons,
//   saveSymbols,
//   saveAssets,
// } = require("../controllers/dataController");

// router.get("/storeAssets", fetchDataMiddleware, saveAssets);
// router.get("/storeSymbols", fetchDataMiddleware, saveSymbols);
// router.get("/storeAssetIcons", fetchDataMiddleware, saveAssetIcons);
// router.get("/storeExchanges", fetchDataMiddleware, saveExchanges);
// router.get("/storeExchangeIcons", fetchDataMiddleware, saveExchangeIcons);

router.get("/assets", validateApiKey, fetchAssets);
router.get("/assetPrice", validateApiKey, assetPriceController);
router.get("/assetIcons", validateApiKey, fetchAssetIcons);

router.get("/exchanges", validateApiKey, fetchExchanges);
router.get("/exchangeIcons", validateApiKey, fetchExchangeIcons);

module.exports = router;
