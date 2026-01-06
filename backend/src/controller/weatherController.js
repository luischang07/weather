const axios = require("axios");
const Weather = require("../models/weatherModel");

exports.getWeather = async (req, res) => {
    const { city } = req.query;

    // Validaciones
    if (!city) {
        return res.status(400).json({ message: "El campo ciudad es obligatorio." });
    }

    const cleanCity = city.trim();
    if (cleanCity.length < 2) {
        return res.status(400).json({ message: "El nombre debe tener al menos 2 caracteres." });
    }

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: cleanCity,
                appid: process.env.WEATHER_API_KEY,
                units: "metric",
                lang: "es",
            },
        });

        // Usamos el Modelo para limpiar la data
        const weatherData = new Weather(response.data);
        res.json(weatherData);

    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({ message: "Ciudad no encontrada." });
        }
        res.status(500).json({ message: "Error interno del servidor" });
    }
};