// apikeyMiddleware.js

const apiKey = "78879775-aef8-417b-8497-618dfd4ed916";

function validateApiKey(req, res, next) {
  const providedApiKey = req.headers["x-api-key"];

  if (!providedApiKey || providedApiKey !== apiKey) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  next();
}

module.exports = validateApiKey;
