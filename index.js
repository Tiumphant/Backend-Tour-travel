import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import app from "./app.js";
dotenv.config();

const PORT = process.env.PORT || 8000;

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
