import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/config.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    console.log(`MongoDB connected successfully!`);
    const port = process.env.PORT || 3000; // Default port if not specified
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Exit the process with failure
  });
