// apikeyMiddleware.js

const apiKey = "78871775-aef8-427b-8497-618efd4dd916";

function validateApiKey(req, res, next) {
  const providedApiKey = req.headers["x-api-key"];

  if (!providedApiKey || providedApiKey !== apiKey) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  next();
}

module.exports = validateApiKey;
