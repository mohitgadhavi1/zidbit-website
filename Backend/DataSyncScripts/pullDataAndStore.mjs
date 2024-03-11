import axios from "axios";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URL;
const apiUrl = "https://coinranking1.p.rapidapi.com/coins";
const databaseName = "crypto_market";
const collectionName = "assets";


async function fetchData() {
  try {
    const period = "5y";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: apiUrl,
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

    const apiResponse = await axios(config);

    // Extract the data from the response
    const { stats, coins } = apiResponse.data.data;

    console.log(coins);

    // Connect to MongoDB
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
    //   const db = client.db(databaseName);
    //   const collection = db.collection(collectionName);
    //   await collection.insertMany([stats]);
    //   console.log('Inserted API data into the "Stats" collection');

      //   for (const apiItem of coins) {
      //     const { symbol, name, ...restOfData } = apiItem;

      //     // Find the document in the collection with a matching asset_id
      //     const existingDocument = await collection.findOne({ asset_id: symbol });

      //     if (existingDocument) {
      //       // If status matches, update the document with the new data

      //       await collection.updateOne(
      //         { _id: existingDocument._id },
      //         { $set: { ...restOfData } }
      //       );

      //       console.log(`Updated document with asset_id `);
      //     }
      //   }
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
