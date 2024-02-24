const { AssetModel, AssetIconModel } = require("../models/AssetData");

const fetchAssets = async (req, res) => {
  try {
    const assetData = await AssetModel.find();

    res.json({
      message: "success",
      data: assetData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const fetchAssetIcons = async (req, res) => {
  try {
    const assetIconData = await AssetIconModel.find();

    res.json({
      message: "success",
      data: assetIconData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  fetchAssets,
  fetchAssetIcons,
};
