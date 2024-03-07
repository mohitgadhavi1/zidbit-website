const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  asset_id: String,
  name: String,
  type_is_crypto: Number,
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
  icon_url: String,
  id_icon50: String,
  data_start: String,
  data_end: String,
});

const IconModelSchema = new mongoose.Schema({
  asset_id: String,
  url: String,
});


{
  asset_id: String,
  name: String,
  type_is_crypto: Number,
 
  data_symbols_count: Number,
  volume_1hrs_usd: Number,
  volume_1day_usd: Number,
  volume_1mth_usd: Number,
  icon_url: String,
  id_icon50: String,
  data_start: String,
  data_end: String,
}

const AssetModel = mongoose.model("assets", DataSchema);
const AssetIconModel = mongoose.model("asset_icons", IconModelSchema);

module.exports = { AssetModel, AssetIconModel };
