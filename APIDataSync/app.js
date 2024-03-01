require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const coinApiRoutes = require("./routes/CoinapiRoutes/cryptoRoutes");
const coinRankingRoutes = require("./routes/CoinrankingRoutes/routes");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use routes
app.use("/api/marketdata", coinApiRoutes);
app.use("/api/marketdata", coinRankingRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
