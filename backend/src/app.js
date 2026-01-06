const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

// preparan al servidor para entender datos
app.use(cors());
app.use(express.json()); 

// conectamos los módulos de rutas
app.use("/api", weatherRoutes);

module.exports = app;