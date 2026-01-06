import Loader from "./Loader";

export default function WeatherForm({
  city,
  setCity,
  onSubmit,
  loading,
  error,
  darkMode,
}) {
  return (
    // este evento onSubmit se dispara al presionar enter o clic en el botón
    <form onSubmit={onSubmit} className="grid gap-3">
      {/* --- campo de texto --- */}
      <input
        type="text"
        placeholder="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)} // actualiza el estado en cada pulsación
        className={`border rounded-md px-3 py-2 outline-none transition
        focus:ring-2
        
        ${
          error.error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:ring-blue-300"
        }
        bg-transparent
        ${
          darkMode
            ? "text-white placeholder-gray-400"
            : "text-black placeholder-gray-500"
        }`}
      />

      {error.error && <p className="text-red-500 text-sm">{error.message}</p>}
      {/* --- boton para accionar  --- */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white py-2 rounded-md
        hover:bg-blue-700 transition
        disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {/* si está cargando muestra el loader, de lo contrario muestra el texto "buscar" */}
        {loading ? <Loader /> : "Buscar"}
      </button>
    </form>
  );
}
