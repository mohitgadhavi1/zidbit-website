require("dotenv").config();
const axios = require("axios");
const { coinRanking } = require("../../services");

const assetHistoryController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const period = req.query.period || "24h";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: coinRanking.assetHistory(id),
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: period,
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      },
    };

    const apiResponse = await axios(config);

    res.json(apiResponse.data);
  } catch (error) {
    console.error(error.response.data);
    res.status(500).json({ error: error.response.data });
  }
};

module.exports = assetHistoryController;
