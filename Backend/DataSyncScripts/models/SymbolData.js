const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
  symbol_id: String,
  exchange_id: String,
  symbol_type: String,
  asset_id_base: String,
  asset_id_quote: String,
  data_start: String,
  data_end: String,
  data_quote_start: String,
  data_quote_end: String,
  data_orderbook_start: String,
  data_orderbook_end: String,
  data_trade_start: String,
  data_trade_end: String,
  volume_1hrs: Number,
  volume_1hrs_usd: Number,
  volume_1day: Number,
  volume_1day_usd: Number,
  volume_1mth: Number,
  volume_1mth_usd: Number,
  price: Number,
  symbol_id_exchange: String,
  price_precision: Number,
  size_precision: Number,
});

const SymbolModel = mongoose.model("symbols", DataSchema);

module.exports = { SymbolModel };
