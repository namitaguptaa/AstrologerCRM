const mongoose = require("mongoose");

const astrologerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  specialization: {
    type: String,
    required: true,
  },

  experience: {
    type: Number,
    required: true,
  },

  fees: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Astrologer", astrologerSchema);