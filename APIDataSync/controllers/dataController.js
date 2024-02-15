// controllers/dataController.js

const DataModel = require("../models/CryptoData");

const fetchDataAndStore = async (req, res) => {
  try {
    const dataToStore = req.apiData;
    const savedData = await DataModel.create(dataToStore);

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
  fetchDataAndStore,
};
