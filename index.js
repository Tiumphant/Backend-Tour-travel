import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/config.js"; // ✅ make sure .js extension is used if type=module

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// MongoDB connection
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running and MongoDB connected!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
