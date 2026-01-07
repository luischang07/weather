import PropTypes from "prop-types";

export default function WeatherCard({ weather, darkMode, unit, toggleUnit }) {
  // función auxiliar para convertir temperaturas
  const convert = (temp) => {
    // proteccion, si temp no viene, usamos 0
    const val = temp || 0;
    return unit === "F" ? Math.round((val * 9) / 5 + 32) : val;
  };
  //precalculo de los valores para mas limpio
  const displayTemp = convert(weather.temperature);
  const feelsLike = convert(weather.feels_like);
  const minTemp = convert(weather.temp_min);
  const maxTemp = convert(weather.temp_max);
  //vartiables de estilo
  const subTextClass = darkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = darkMode ? "bg-slate-700/50" : "bg-blue-50/80";

  const weatherItems = [
    { label: "Sensación", value: `${feelsLike}°` },
    { label: "Humedad 💧", value: `${weather.humidity || 0}%` },
    { label: "Viento 💨", value: `${weather.wind?.speed || 0} m/s` },
    { label: "Mín / Máx", value: `${minTemp}° / ${maxTemp}°` },
    { label: "Amanecer 🌅", value: weather.sunrise || "--:--" },
    { label: "Atardecer 🌇", value: weather.sunset || "--:--" },
    { label: "Presión", value: `${weather.pressure || 0} hPa` },
    { label: "Visibilidad 👁️", value: `${weather.visibility || 0} km` },
  ];

  return (
    <div
      className={`mt-6 transition-colors duration-300 animate-fade-in
      ${darkMode ? "text-white" : "text-gray-800"}`}
    >
      {/* ---  ubicación y tiempo --- */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold leading-none">
          {weather.city}, {weather.country}
        </h2>
        <p className={`text-sm mt-1 ${subTextClass}`}>{weather.localTime}</p>
      </div>

      {/* --- clima principal --- */}
      <div className="flex flex-col items-center justify-center mb-6">
        <img
          src={weather.icon}
          alt={weather.conditionText}
          className="w-28 h-28 drop-shadow-md"
        />
        <div className="text-center relative">
          <p className="text-6xl font-extrabold tracking-tighter">
            {displayTemp}°
          </p>
          <p className={`text-xl font-medium capitalize mt-1 ${subTextClass}`}>
            {weather.conditionText}
          </p>
          {/* Botón para c / f */}
          <button
            onClick={toggleUnit}
            className={`absolute top-2 -right-12 text-xs font-bold px-2 py-1 rounded border transition hover:scale-105
              ${darkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-300 text-gray-500 hover:bg-gray-100"
              }`}
          >
            °{unit === "C" ? "F" : "C"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        {weatherItems.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
          >
            <span className={subTextClass}>{item.label}</span>
            <span className="font-bold text-lg">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    localTime: PropTypes.string,
    temperature: PropTypes.number,
    conditionText: PropTypes.string,
    icon: PropTypes.string,
    feels_like: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    pressure: PropTypes.number,
    visibility: PropTypes.number,
  }).isRequired,
  darkMode: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired,
  toggleUnit: PropTypes.func.isRequired,
};
