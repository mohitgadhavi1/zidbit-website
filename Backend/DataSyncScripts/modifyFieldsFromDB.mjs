//removeFieldsFromDB
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
// Connection URI
const uri = process.env.MONGO_URL;
const collectinName = "assets";
const databaseName = "crypto_market";

const agg = [
  {
    $set: {
      volume: {
        volume_1hrs_usd: "$volume_1hrs_usd",
        volume_1day_usd: "$volume_1day_usd",
        volume_1mth_usd: "$volume_1mth_usd",
      },
    },
  },
  {
    $unset: ["volume_1hrs_usd", "volume_1day_usd", "volume_1mth_usd"],
  },
];

const client = await MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

try {
  const coll = client.db("crypto_market").collection("assets");
  const result = await coll.updateMany({}, agg);

  console.log(`Updated documents: ${result.modifiedCount}`);
} catch (updateErr) {
  console.error(updateErr);
} finally {
  await client.close();
}
