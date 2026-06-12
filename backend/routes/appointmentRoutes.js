const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");

// Add Appointment
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("customerId")
      .populate("astrologerId");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;