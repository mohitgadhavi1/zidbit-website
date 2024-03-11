const {
  AssetModel,
  AssetIconModel,
  AssetHistoryModel,
} = require("../../models/AssetData");

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

const fetchAssetHistory = async (req, res) => {
  const uuid = req.params.id;

  try {
    const assetHistory = await AssetHistoryModel.find({ uuid });

    if (!assetHistory) {
      return res.status(404).json({ message: "Asset history not found" });
    }

    res.status(200).json(assetHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  fetchAssets,
  fetchAssetIcons,
  fetchAssetHistory,
};
