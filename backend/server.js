const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const customerRoutes = require("./routes/customerRoutes");
const astrologerRoutes = require("./routes/astrologerRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/customers", customerRoutes);
app.use("/astrologers", astrologerRoutes);
app.use("/appointments", appointmentRoutes);
app.get("/", (req, res) => {
  res.send("Astrologer CRM Backend Running 🚀");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});