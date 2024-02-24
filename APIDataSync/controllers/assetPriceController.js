require("dotenv").config();
const axios = require("axios");
const coinAPI = require("../services");

const assetPriceController = async (req, res, next) => {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: coinAPI.assetsPrice(),
      headers: {
        Accept: "text/json",
        "X-CoinAPI-Key": process.env.COINAPI_APIKey,
      },
    };

    const apiResponse = await axios(config);

    res.json({
      message: "success",
      data: apiResponse.data,
    });
  } catch (error) {
    console.error(error.response.data.errors);
    res.status(500).json({ error: "Error fetching data " });
  }
};

module.exports = assetPriceController;
