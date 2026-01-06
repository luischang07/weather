class Weather {
  constructor(data) {

    
    this.city = data.name;
    this.country = data.sys.country;
    this.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    // Cálculos de tiempo
    this.localTime = new Date((data.dt + data.timezone) * 1000)
      .toUTCString()
      .replace(" GMT", "");


    this.sunrise = new Date((data.sys.sunrise + data.timezone) * 1000)
      .toUTCString()
      .slice(17, 22);


    this.sunset = new Date((data.sys.sunset + data.timezone) * 1000)
      .toUTCString()
      .slice(17, 22);



    // temperaturas redondeadas


    this.temperature = Math.round(data.main.temp);
    this.feels_like = Math.round(data.main.feels_like);
    this.temp_min = Math.round(data.main.temp_min);
    this.temp_max = Math.round(data.main.temp_max);


    this.conditionText = data.weather[0].description;
    this.humidity = data.main.humidity;
    this.pressure = data.main.pressure;

    this.visibility = (data.visibility / 1000).toFixed(1);


    this.wind = {
      speed: data.wind.speed,
      deg: data.wind.deg,
    };
  }
}

module.exports = Weather;
