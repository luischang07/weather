const weatherService = require("../services/weatherService");

exports.getWeather = async (req, res, next) => {
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
    const weatherData = await weatherService.getWeatherByCity(cleanCity);
    res.json(weatherData);

  } catch (error) {
    if (error.response) {
      const apiError = new Error("Ciudad no encontrada.");
      apiError.status = error.response.status;
      return next(apiError);
    }
    // Otros errores
    next(error);
  }
};