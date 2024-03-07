import { AssetIconModel } from "./models/AssetData";

const axios = require('axios');
const mongoose = require('mongoose');

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
  fetchDataAndStoreInDB();
});



// Fetch data from API and store in MongoDB
async function fetchDataAndStoreInDB() {
  try {
    const apiResponse = await axios.get('https://api.example.com/data'); 

    // Assume your API response is an array of objects
    const newDataArray = apiResponse.data.map((apiItem) => ({
      existingField1: apiItem.existingField1,

    }));

    // Insert the new data into MongoDB
    await AssetIconModel.insertMany(newDataArray);

    console.log('Data successfully fetched and stored in MongoDB');
  } catch (error) {
    console.error('Error fetching or storing data:', error.message);
  } finally {
    // Close MongoDB connection after the operation is complete
    mongoose.connection.close();
  }
}