const { InfoModel } = require("../../models/InfoData");

const cryptoInfoController = async (req, res) => {
  try {
    const infoData = await InfoModel.find();

    res.json({
      message: "success",
      data: infoData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = cryptoInfoController;
