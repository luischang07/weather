# Weather App

## Requisitos

- Node.js (versión recomendada: LTS)
- npm

---

## Configuración del Frontend

1. Entra a la carpeta `front`:
   ```bash
   cd front
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   ```bash
   cp .env.example .env
   ```
4. Inicia el proyecto:
   ```bash
   npm run dev
   ```

---

## Configuración del Backend

1. Entra a la carpeta `backend`:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   ```bash
   cp .env.example .env
   ```
   *Nota: No olvides agregar tu `WEATHER_API_KEY` en el archivo `.env`.*
4. Inicia el servidor:
   ```bash
   node index.js
   ```

---

## Notas

- El frontend corre por defecto en `http://localhost:5173/`.
- El backend corre por defecto en `http://localhost:3000/`.
- Asegúrate de tener configuradas las variables de entorno para que la comunicación entre front y back funcione correctamente.

