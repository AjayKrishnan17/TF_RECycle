import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

// POST /api/contact — submit a new message from the Contact page form
router.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, allotmentNumber, message } = req.body;

    if (!fullName || !email || !phone || !allotmentNumber || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const saved = await ContactMessage.create({
      fullName,
      email,
      phone,
      allotmentNumber,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message received. The RECycle team will reach out soon.",
      id: saved._id,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Could not save your message. Please try again." });
  }
});

// GET /api/contact — list messages (basic admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch messages." });
  }
});

export default router;
