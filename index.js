import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running and MongoDB connected!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
