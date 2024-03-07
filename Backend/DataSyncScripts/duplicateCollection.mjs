//removeFieldsFromDB
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
// Connection URI
const uri = process.env.MONGO_URL;
const collectinName = "assets";
const databaseName = "crypto_market";
const duplicatedCollectionName = "assets_duplicated2";

(async () => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const db = client.db(databaseName);
    const sourceCollection = db.collection(collectinName);

    const duplicatedCollection = db.collection(duplicatedCollectionName);

    // Duplicate the collection using aggregate with $out
    await sourceCollection
      .aggregate([
        {
          $out: duplicatedCollectionName,
        },
      ])
      .toArray();

    console.log(
      `Duplicated collection "${duplicatedCollectionName}" created successfully`
    );
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
})();
