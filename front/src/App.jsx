import { useState } from "react";
import axios from "axios";
import WeatherForm from "./components/WeatherForm.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

export default function App() {
  const [city, setCity] = useState("");// Ciudad que escribe el usuario
  const [unit, setUnit] = useState("C");// unidad de medida 
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);//alternar entre modo oscuro y claro
  const [error, setError] = useState({ error: false, message: "" });

  // mas que nada es el estado del clima en donde aqui se almacena la respuesta procesada del backend
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    localTime: "",
    temperature: 0,
    conditionText: "",
    icon: "",
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    wind: { speed: 0 },
    sunrise: "",
    sunset: "",
    pressure: 0,
    visibility: 0,
  });

  const toggleUnit = () => {//funcion para  la unidad d medida esarla alternando 
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  };
  //funcion para obtener el fondo segun el clima
  const getWeatherBackground = () => {
    if (!weather.conditionText)
      return "bg-gradient-to-b from-sky-300 to-blue-500";
    const text = weather.conditionText.toLowerCase();

    if (text.includes("lluvioso"))
      return "bg-gradient-to-b from-slate-700 to-slate-900";
    if (text.includes("nubes"))
      return "bg-gradient-to-b from-gray-400 to-gray-600";
    if (text.includes("claro") || text.includes("soleado"))
      return "bg-gradient-to-b from-yellow-300 to-sky-400";
    if (text.includes("niebla") || text.includes("neblina"))
      return "bg-gradient-to-b from-zinc-400 to-zinc-600";
    if (text.includes("tormenta"))
      return "bg-gradient-to-b from-indigo-900 to-purple-800";

    return "bg-gradient-to-b from-blue-400 to-blue-700";
  };
  //funcion que se ejecuta al enviar el formulario
  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };
      // hace la peticion al backend
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/weather`, {
        params: { city: city },
      });

      // guardamos la respuesta en el estado del clima
      setWeather(res.data);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || err.message || "Ocurrió un error";
      setError({ error: true, message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  return (

    // Contenedor principal con estilos condicionales para modo oscuro y fondo según el clima
    <main
      className={`min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-500
      ${darkMode ? getWeatherBackground() : "bg-slate-900 text-white"}`}
    >
      <div
        className={`relative w-full max-w-md p-6 rounded-3xl shadow-2xl transition-colors duration-500 backdrop-blur-sm
        ${darkMode ? "bg-slate-800/95" : "bg-white/90"}`}
      >
        {/* Botón para cambiar Modo Oscuro / Claro */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full
          bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <h1 className="text-3xl font-extrabold text-center mb-6 tracking-tight text-gray-800 dark:text-white">
          🌤 Weather App
        </h1>
        {/*formulario de búsqueda */}
        <WeatherForm
          city={city}
          setCity={setCity}
          onSubmit={onSubmit}
          loading={loading}
          error={error}
          darkMode={darkMode}
        />
        {/* esta vendria siendo la tarjeta de resultados solo aparecera si hay una ciudad cargada */}
        {weather.city && (
          <WeatherCard
            weather={weather}
            darkMode={darkMode}
            unit={unit}
            toggleUnit={toggleUnit}
          />
        )}

        <p className="text-center text-xs mt-6 text-gray-400 opacity-70">
          Desarrollado con Node.js & React
        </p>
      </div>
    </main>
  );
}
