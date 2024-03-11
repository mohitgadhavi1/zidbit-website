const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  total: Number,
  totalCoins: Number,
  totalMarkets: Number,
  totalExchanges: Number,
  totalMarketCap: String,
  total24hVolume: String,
});

const InfoModel = mongoose.model("stats", InfoSchema);

module.exports = { InfoModel };
