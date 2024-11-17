
const express = require("express");
const router = express.Router();
const Station = require("../models/Station");

// Get all stations
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get station by ID
router.get("/:id", async (req, res) => {
  try {
    const station = await Station.findById(req.params.id);
    if (!station) return res.status(404).json({ message: "Station not found" });
    res.json(station);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
