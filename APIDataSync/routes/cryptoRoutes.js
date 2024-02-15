// routes/dataRoutes.js
const express = require("express");
const fetchDataMiddleware = require("../middlewares/fetchDataMiddleware");
const { fetchDataAndStore } = require("../controllers/dataController");

const router = express.Router();

router.get("/storeAssets", fetchDataMiddleware, fetchDataAndStore);
router.get("/storeExchanges", fetchDataMiddleware, fetchDataAndStore);

module.exports = router;
