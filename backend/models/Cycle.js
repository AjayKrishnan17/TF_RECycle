import mongoose from "mongoose";

const cycleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, trim: true, default: "Standard" },
    condition: {
      type: String,
      enum: ["Excellent", "Good", "Fair"],
      default: "Good",
    },
    monthlyRate: { type: Number, required: true },
    available: { type: Boolean, default: true },
    imageUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Cycle", cycleSchema);
