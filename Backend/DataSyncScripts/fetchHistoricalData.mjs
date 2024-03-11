import axios from "axios";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URL;
const apiUrl = (id) => `https://coinranking1.p.rapidapi.com/coin/${id}/history`;
const databaseName = "crypto_market";
const collectionName = "assets";

async function fetchData() {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      // Select the existing MongoDB collection
      const db = client.db("crypto_market");
      const assetsCollection = db.collection("assets");
      const historyCollection = db.collection("history");

      // Find unique uuid values in the 'assets' collection
      const uniqueUuids = await assetsCollection.distinct("uuid");

      // Fetch data for each uuid and store it in the 'history' collection
      for (const uuid of uniqueUuids) {
        //axios config
        const period = "5y";
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: apiUrl(uuid),
          params: {
            referenceCurrencyUuid: "yhjMzLPhuIDl",
            timePeriod: period,
            "tiers[0]": "1",
            orderBy: "marketCap",
            orderDirection: "desc",
            limit: "100",
            offset: "0",
          },
          headers: {
            "X-RapidAPI-Key": process.env.RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.RAPID_API_HOST,
          },
        };
        // Make an API request
        const response = await axios(config);

        // Extract the data from the response
        const { history } = response.data.data;

        // Store the data in the 'history' collection
        await historyCollection.insertOne({
          uuid,
          history,
        });

        console.log(
          `Inserted data for uuid ${uuid} into the "history" collection`
        );
      }
    } finally {
      // Close the MongoDB connection
      await client.close();
    }
  } catch (error) {
    console.error("Error fetching data or updating collection:", error);
  }
}

// Call the fetchData function to execute the process
fetchData();
