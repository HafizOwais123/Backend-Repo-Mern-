



import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import { baseRoot } from "./controllers/todoController.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded MongoDB URI
const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.tnwnzuk.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ DB Connected Successfully"))
  .catch((error) => console.log("❌ DB Connection Error:", error));

// Routes
app.get("/", baseRoot);
app.use("/api", todoRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
