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
              ${
                darkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 text-gray-500 hover:bg-gray-100"
              }`}
          >
            °{unit === "C" ? "F" : "C"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div
          className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
        >
          <span className={subTextClass}>Sensación</span>
          <span className="font-bold text-lg">{feelsLike}°</span>
        </div>

        <div
          className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
        >
          <span className={subTextClass}>Humedad 💧</span>
          <span className="font-bold text-lg">{weather.humidity || 0}%</span>
        </div>

        <div
          className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
        >
          <span className={subTextClass}>Viento 💨</span>
          <span className="font-bold text-lg">
            {weather.wind?.speed || 0} m/s
          </span>
        </div>

        <div
          className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
        >
          <span className={subTextClass}>Mín / Máx</span>
          <span className="font-bold text-lg">
            {minTemp}° / {maxTemp}°
          </span>
        </div>

        <div
          className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
        >
          <span className={subTextClass}>Amanecer 🌅</span>
          <span className="font-bold text-lg">
            {weather.sunrise || "--:--"}
          </span>
        </div>

        <div
          className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
        >
          <span className={subTextClass}>Atardecer 🌇</span>
          <span className="font-bold text-lg">{weather.sunset || "--:--"}</span>
        </div>

        <div
          className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
        >
          <span className={subTextClass}>Presión</span>
          <span className="font-bold text-lg">{weather.pressure || 0} hPa</span>
        </div>

        <div
          className={`p-3 rounded-xl flex flex-col items-center justify-center ${cardBg}`}
        >
          <span className={subTextClass}>Visibilidad 👁️</span>
          <span className="font-bold text-lg">
            {weather.visibility || 0} km
          </span>
        </div>
      </div>
    </div>
  );
}
