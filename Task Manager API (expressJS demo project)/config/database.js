const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(url);
    console.log(`> MongoDB Connected :${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;

