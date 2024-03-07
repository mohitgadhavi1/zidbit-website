require("dotenv").config();
const axios = require("axios");
const { coinRanking } = require("../../services");

const assetController = async (req, res, next) => {
  try {
    const period = req.query.period || "24h";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: coinRanking.assets(),
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: period,
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_API_HOST,
      },
    };

    const apiResponse = await axios(config);

    res.json(apiResponse.data);
  } catch (error) {
    console.error(error.response.data.errors);
    res.status(500).json({ error: error.response.data });
  }
};

module.exports = assetController;
