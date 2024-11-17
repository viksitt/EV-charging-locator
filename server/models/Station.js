
const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

module.exports = mongoose.model("Station", stationSchema);
