import { Router } from "express";
import Cycle from "../models/Cycle.js";

const router = Router();

// GET /api/cycles — all cycles (optionally ?available=true)
router.get("/", async (req, res) => {
  try {
    const filter = {};
    if (req.query.available === "true") filter.available = true;
    const cycles = await Cycle.find(filter).sort({ createdAt: -1 });
    res.json(cycles);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch cycles." });
  }
});

// GET /api/cycles/featured — small teaser list for the homepage
router.get("/featured", async (req, res) => {
  try {
    const cycles = await Cycle.find({ available: true }).sort({ createdAt: -1 }).limit(3);
    res.json(cycles);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch featured cycles." });
  }
});

// POST /api/cycles — add a cycle (basic admin use)
router.post("/", async (req, res) => {
  try {
    const cycle = await Cycle.create(req.body);
    res.status(201).json(cycle);
  } catch (err) {
    res.status(400).json({ error: "Could not create cycle." });
  }
});

export default router;
