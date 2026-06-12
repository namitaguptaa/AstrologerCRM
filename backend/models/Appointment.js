const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },

  astrologerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Astrologer",
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Scheduled",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);