// routes/dataRoutes.js
const express = require("express");
const fetchDataMiddleware = require("../middlewares/fetchDataMiddleware");
const {
  fetchAssets,
  fetchExchanges,
  fetchAssetIcons,
  fetchExchangeIcons,
  fetchSymbols,
} = require("../controllers/dataController");

const router = express.Router();

router.get("/storeAssets", fetchDataMiddleware, fetchAssets);
router.get("/storeSymbols", fetchDataMiddleware, fetchSymbols);
router.get("/assetIcons", fetchDataMiddleware, fetchAssetIcons);
router.get("/storeExchanges", fetchDataMiddleware, fetchExchanges);
router.get("/exchangeIcons", fetchDataMiddleware, fetchExchangeIcons);

module.exports = router;
