const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weatherController");

// Definimos la ruta de clima
router.get("/weather", weatherController.getWeather);

module.exports = router;