require("dotenv").config();
const axios = require("axios");

const { cryptoNewsApi } = require("../services");

const cryptoNewsController = async (req, res, next) => {
  try {
    const newsSource = req.query.newsSource || "coindesk";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: cryptoNewsApi(newsSource),

      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
      },
    };

    const apiResponse = await axios(config);

    res.json(apiResponse.data);
  } catch (error) {
    console.error(error.response.data);
    res.status(500).json({ error: error.response });
  }
};

module.exports = cryptoNewsController;
