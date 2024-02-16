// controllers/dataController.js

const AssetModel = require("../models/AssetData");
const ExchangeData = require("../models/ExchangeData");

const fetchExchanges = async (req, res) => {
  try {
    const dataToStore = req.apiData;
    const savedData = await ExchangeData.create(dataToStore);

    res.json({
      message: "Data fetched and stored successfully",
      data: savedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchAssets = async (req, res) => {
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

module.exports = {
  fetchExchanges,
  fetchAssets,
};
