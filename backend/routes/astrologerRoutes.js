const express = require("express");
const router = express.Router();

const Astrologer = require("../models/Astrologer");

// Add Astrologer
router.post("/", async (req, res) => {
  try {
    const astrologer = new Astrologer(req.body);
    await astrologer.save();

    res.status(201).json(astrologer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Astrologers
router.get("/", async (req, res) => {
  try {
    const astrologers = await Astrologer.find();
    res.json(astrologers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;