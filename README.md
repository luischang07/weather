# Whater

## Requisitos

- Node.js (versión recomendada: LTS)
- npm

---

## Inicialización del proyecto (Frontend)

Desde la **raíz del proyecto**, ejecuta los siguientes comandos para eliminar dependencias anteriores e instalar las necesarias:

```bash
rm -rf node_modules/
npm install
```

Una vez instaladas las dependencias, levanta el **frontend** con:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173/
```

---

## Inicialización del servidor (Backend)

Accede a la carpeta `server`:

```bash
cd server
```

Instala las dependencias del servidor (si es la primera vez):

```bash
npm install
```

Luego, ejecuta el servidor con:

```bash
npm start
```

El servidor quedará corriendo en:

```
http://localhost:3000/
```

---

## Notas

- Asegúrate de que los puertos **5173** (frontend) y **3000** (backend) estén disponibles.
- Si usas variables de entorno, verifica que el archivo `.env` esté correctamente configurado.
  aa
