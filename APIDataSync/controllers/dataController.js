const fs = require("fs");

const { AssetModel, AssetIconModel } = require("../models/AssetData");
const { ExchangeModel, ExchangeIconModel } = require("../models/ExchangeData");
const { SymbolModel } = require("../models/SymbolData");

const saveExchanges = async (req, res) => {
  try {
    const dataToStore = req.apiData;
    const savedData = await ExchangeModel.create(dataToStore);

    res.json({
      message: "Data fetched and stored successfully",
      data: savedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const saveAssets = async (req, res) => {
  try {
    const dataToStore = req.apiData;
    const savedData = await AssetModel.create(dataToStore);

    res.json({
      message: "Data fetched and stored successfully",
      data: savedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const saveAssetIcons = async (req, res) => {
  try {
    const dataToStore = req.apiData;
    const savedData = await AssetIconModel.create(dataToStore);

    res.json({
      message: "Data fetched and stored successfully",
      data: savedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const saveExchangeIcons = async (req, res) => {
  try {
    const dataToStore = req.apiData;
    const savedData = await ExchangeIconModel.create(dataToStore);

    res.json({
      message: "Data fetched and stored successfully",
      data: savedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const saveSymbols = async (req, res) => {
  try {
    const dataToStore = req.apiData;
    // console.log(dataToStore);

    // Write data to JSON file
    const fileName = "symbols_data.json";
    fs.writeFileSync(fileName, JSON.stringify(dataToStore, null, 2));

    res.json({
      message: "Data fetched and stored successfully",
      // data: dataToStore,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  saveExchanges,
  saveAssets,
  saveExchangeIcons,
  saveAssetIcons,
  saveSymbols,
};
