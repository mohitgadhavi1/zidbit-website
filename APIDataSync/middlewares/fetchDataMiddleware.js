require("dotenv").config();
const axios = require("axios");
const coinAPI = require("../services");

const fetchDataMiddleware = async (req, res, next) => {
  let dynamicUrl;

  if (req.route.path === "/storeAssets") {
    dynamicUrl = coinAPI.assets();
  } else if (req.route.path === "/storeExchanges") {
    dynamicUrl = coinAPI.exchanges();
  } else if (req.route.path === "/assetIcons") {
    dynamicUrl = coinAPI.assetIcons();
  } else if (req.route.path === "/exchangeIcons") {
    dynamicUrl = coinAPI.exchangeIcons();
  } else if (req.route.path === "/storeSymbols") {
    dynamicUrl = coinAPI.symbols();
  }

  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: dynamicUrl,
      headers: {
        Accept: "text/json",
        "X-CoinAPI-Key": process.env.COINAPI_APIKey,
      },
    };

    const apiResponse = await axios(config);

    req.apiData = apiResponse.data;
    next();
  } catch (error) {
    console.error(error.response.data.errors);
    res
      .status(500)
      .json({ error: "Error fetching data from the third-party API" });
  }
};

module.exports = fetchDataMiddleware;
