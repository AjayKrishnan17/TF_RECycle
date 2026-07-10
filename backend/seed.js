// Optional: run `node seed.js` from /backend to populate a few demo cycles.
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cycle from "./models/Cycle.js";

dotenv.config();

const demoCycles = [
  { name: "Hero Ranger", type: "City Bike", condition: "Excellent", monthlyRate: 350, available: true },
  { name: "Atlas Sprint", type: "Hybrid", condition: "Good", monthlyRate: 300, available: true },
  { name: "BSA Ladybird", type: "Standard", condition: "Good", monthlyRate: 250, available: true },
];

async function run() {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/recycle-hub");
  await Cycle.deleteMany({});
  await Cycle.insertMany(demoCycles);
  console.log("Seeded demo cycles.");
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
