require("dotenv").config(); // Ensure dotenv is loaded correctly

const mongoose = require("mongoose");

const connectMongoDB = async () => {
  const mongoURI = "mongodb+srv://sokkaidevelopement:TN30e4230!@cluster0.rgtk1.mongodb.net/";

  if (!mongoURI) {
    console.log("MongoDB URI is missing in environment variables.");
    throw new Error("MongoDB URI is required.");
  }

  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB.");
  } catch (error) {
    console.error("Error occurred during MongoDB connection: 😒", error);
    throw new Error("Could not connect to MongoDB");
  }
};

module.exports = connectMongoDB;
