import express from "express";
import BookRoutes from "./routes/Booking.Routes.js";
import ContactRoutes from "./routes/Contact.Routes.js";
import cors from "cors";
const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api", BookRoutes, ContactRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

// Error Handling Middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
