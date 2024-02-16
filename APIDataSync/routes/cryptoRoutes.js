// routes/dataRoutes.js
const express = require("express");
const fetchDataMiddleware = require("../middlewares/fetchDataMiddleware");
const {
  fetchAssets,
  fetchExchanges,
} = require("../controllers/dataController");

const router = express.Router();

router.get("/storeAssets", fetchDataMiddleware, fetchAssets);
router.get("/storeExchanges", fetchDataMiddleware, fetchExchanges);

module.exports = router;
