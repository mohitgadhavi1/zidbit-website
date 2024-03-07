const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  exchange_id: String,
  website: String,
  name: String,
  data_quote_start: String,
  data_quote_end: String,
  data_orderbook_start: String,
  data_orderbook_end: String,
  data_trade_start: String,
  data_trade_end: String,
  data_symbols_count: Number,
  volume_1hrs_usd: Number,
  volume_1day_usd: Number,
  volume_1mth_usd: Number,
});

const IconModelSchema = new mongoose.Schema({
  exchange_id: String,
  url: String,
});
const ExchangeIconModel = mongoose.model("exchange_icons", IconModelSchema);
const ExchangeModel = mongoose.model("exchanges", DataSchema);

module.exports = { ExchangeModel, ExchangeIconModel };
