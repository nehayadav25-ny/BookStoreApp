
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI || "mongodb://localhost:27017/bookStore";

// Connect to MongoDB
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

// Default route
app.get("/", (req, res) => {
  res.send("📚 Welcome to the BookStore Backend API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
