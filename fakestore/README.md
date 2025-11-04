# fakestore

Repositorio pequeño con un script CLI para interactuar con la API pública https://fakestoreapi.com.

## Descripción

El archivo `index.js` implementa funciones para listar, obtener, crear, actualizar y eliminar productos usando `fetch`.

## Requisitos

- Node.js 18+ (incluye `fetch` global). Si usas una versión anterior, instala `node-fetch` o actualiza Node.
- Conexión a Internet.

## Archivos importantes

- `index.js` — script principal (CLI).

## Uso

Abrir una terminal en la carpeta `fakestore` y ejecutar:

- Listar todos los productos:
  - PowerShell: `node .\index.js get products`
- Obtener un producto por id:
  - PowerShell: `node .\index.js get 1`
- Crear un producto (args: title price category):
  - PowerShell: `node .\index.js post "Nuevo Producto" 19.99 "electronics"`
- Eliminar un producto por id:
  - PowerShell: `node .\index.js delete 5`

Argumentos (según `index.js`):
- comando: `get` | `post` | `delete`
- para `get`: segundo argumento `products` o un id
- para `post`: `title` en arg[2], `price` en arg[3], `category` en arg[4]
- para `delete`: id en arg[1]

## Endpoints usados

- GET https://fakestoreapi.com/products
- POST https://fakestoreapi.com/products
- PUT https://fakestoreapi.com/products/:id
- DELETE https://fakestoreapi.com/products/:id

## Notas / mejoras


## Licencia

Proyecto de ejemplo, sin licencia especificada.
