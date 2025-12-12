# Clase 12 - API REST con Node.js, Express y Firebase

API REST para gestión de productos con autenticación JWT y almacenamiento en Firestore.

## Descripción

Este proyecto es un servidor Express que proporciona endpoints CRUD (Create, Read, Update, Delete) para productos. Implementa:

- **Autenticación con JWT**: tokens para proteger rutas.
- **Firestore (Firebase)**: almacenamiento NoSQL de productos.
- **CORS**: configuración para peticiones desde diferentes orígenes.
- **Estructura en capas**: controladores, servicios y modelos separados.

## Requisitos

- **Node.js** 18+ (con `fetch` global)
- **npm** (gestor de paquetes)
- **Cuenta Firebase** con proyecto activo y Firestore Database configurada.

## Instalación

1. **Clonar/descargar** el proyecto.

2. **Instalar dependencias**:
   ```powershell
   npm install
   ```

3. **Configurar variables de entorno** (archivo `.env`):
   ```env
   FIREBASE_API_KEY=<tu_api_key>
   FIREBASE_AUTH_DOMAIN=<tu_auth_domain>
   FIREBASE_PROJECT_ID=<tu_project_id>
   FIREBASE_STORAGE_BUCKET=<tu_storage_bucket>
   FIREBASE_MESSAGING_SENDER_ID=<tu_sender_id>
   FIREBASE_APP_ID=<tu_app_id>
   JWT_SECRET_KEY=<tu_clave_secreta>  # Opcional, usa la default si no especificas
   PORT=3000  # Puerto (opcional, default 3000)
   ```


## Uso

### Iniciar el servidor

```powershell
npm start
```

El servidor se ejecuta en `http://localhost:3000` (o https://back-end-node-js-five.vercel.app/).

### Endpoints

#### 1. **Login** (Generar token)

```http
POST /api/login
Content-Type: application/json

{
  "email": "test@gmail.com",
  "password": "123456"
}
```

#### 2. **Obtener todos los productos** (Protegido)

```http
GET /api/products
Authorization: Bearer <token>
```

#### 3. **Obtener un producto por ID** (Protegido)

```http
GET /api/products/<id>
Authorization: Bearer <token>
```

#### 4. **Crear producto** (Protegido)

```http
POST /api/products/create
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Nuevo Producto",
  "price": 2000,
  "category": "electronics"
}
```

#### 5. **Actualizar producto** (Protegido)

```http
PUT /api/products/<id>
Authorization: Bearer <token>
Content-Type: application/json

{
  "price": 2500,
  "name": "Producto Actualizado"
}
```

#### 6. **Eliminar producto** (Protegido)

```http
DELETE /api/products/<id>
Authorization: Bearer <token>
```

## Estructura del Proyecto

```
clase12/
├── index.js                       # Punto de entrada, configura Express
├── package.json                   # Dependencias
├── .env                           # Variables de entorno
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js     # Login y generación de tokens
│   │   └── products.controller.js # CRUD de productos
│   ├── services/
│   │   └── products.service.js    # Lógica de negocio (productos)
│   ├── models/
│   │   ├── firebase.js            # Funciones Firestore (obtener, agregar, etc.)
│   │   └── products.model.js      # Modelo de productos (legacy)
│   ├── middleware/
│   │   └── aunthenticator.js      # Validación JWT
│   ├── routes/
│   │   ├── auth.routes.js         # Rutas de autenticación
│   │   └── products.routes.js     # Rutas de productos
│   └── data/
│       ├── data.js                # Inicialización Firebase
│       └── tokentest.js           # Generación de JWT
└── scripts/
    └── verifyToken.js             # Herramienta para verificar tokens
```