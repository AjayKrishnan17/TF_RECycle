import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contact.js";
import cyclesRoutes from "./routes/cycles.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "recycle-hub-api" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/cycles", cyclesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`RECycle Hub API running on port ${PORT}`);
  });
});
