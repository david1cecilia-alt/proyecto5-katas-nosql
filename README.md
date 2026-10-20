# Katas de NoSQL · API de películas

API REST con **Node.js, Express y MongoDB (Mongoose)** que implementa un CRUD de películas. Proyecto del **1º de Ciberseguridad**.

## Endpoints

| Método | Ruta | Acción |
|---|---|---|
| GET | `/movies` | Lista todas las películas |
| POST | `/movies` | Crea una película |
| PUT | `/movies/:id` | Modifica una película |
| DELETE | `/movies/:id` | Elimina una película |

## Puesta en marcha

Requiere Node.js y una instancia de MongoDB.

```bash
npm install
cp .env.example .env   # y rellena MONGO_URI
npm start
```

## Estructura

```
src/
├── index.js              → servidor Express y conexión a MongoDB
├── models/               → esquemas de Mongoose (movie, cinema)
└── routes/               → rutas del CRUD
```
