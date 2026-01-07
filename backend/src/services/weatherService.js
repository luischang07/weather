const axios = require("axios");
const Weather = require("../models/weatherModel");

class WeatherService {
  async getWeatherByCity(city) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        appid: process.env.WEATHER_API_KEY,
        units: "metric",
        lang: "es",
      },
    });

    return new Weather(response.data);
  }
}

module.exports = new WeatherService();
