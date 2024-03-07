const {
  ExchangeModel,
  ExchangeIconModel,
} = require("../../models/ExchangeData");

const fetchExchanges = async (req, res) => {
  try {
    const exchangeData = await ExchangeModel.find();

    res.json({
      message: "success",
      data: exchangeData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchExchangeIcons = async (req, res) => {
  try {
    const exchangeIconData = await ExchangeIconModel.find();

    res.json({
      message: "success",
      data: exchangeIconData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  fetchExchanges,
  fetchExchangeIcons,
};
