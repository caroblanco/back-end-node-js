//Definición de rutas específicas para productos.
import {Router} from 'express';
const router = Router();


//EXPRESS ROUTER: Un middleware de Express.js que permite crear manejadores de rutas modulares y montables.
//Agrupa rutas en diferentes archivos o módulos, facilitando la escalabilidad y organización del código.

router.get('/products', (req, res) => {
  res.send('Listado de productos');
});

router.get('/', (req, res) => {
  res.send('Ruta principal de products');
});


export default router; //dentro de router voy a tener las distintas rutas

