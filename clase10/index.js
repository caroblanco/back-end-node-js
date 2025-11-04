import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';


const app = express();
const corsConfig = {
    origin: ['http://localhost:3000/', 'https://midominio.com/'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors(corsConfig));

//CONFIGURO CORS
app.use((req, res, next) => {
  /*res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); //PERMITO INGRESOS DE SOLICITUDES NOMAS DE ESTA URL
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Q METODOS FUNCIONAN EN MI API
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Q HEADERS SE PUEDEN USAR, PUEDO USAR ESOS DOS HEADERS
  res.header('Access-Control-Allow-Credentials', 'true'); // PERMITO ENVIAR COOKIES DESDE MI API*/
  next();
});


//middleware
app.use((req,res,next) =>{
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
})

app.use('/api', productsRouter); //tengo q escribir /api/productos para acceder a la ruta. podria no tener el /api

app.get("/HTML",(req,res) => {
    res.send("<h1>Hola, mundo desde Express!</h1>");
})

app.get("/JSON",(req,res) => {
    res.send({productos: [
        {nombre: "producto1", precio: 100},
        {nombre: "producto2", precio: 200}
    ]})
})

//Rutas Parametrizadas: Path Params. Permiten crear rutas dinámicas en lugar de rutas fijas. Identificar recursos especificos
app.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`Devolviendo el ítem con ID: ${itemId}`);
});

//Query Params. Parámetros enviados después del signo de interrogación en la URL. Útiles para filtros o configuraciones adicionales.
// /items?category=electronics&price=low
app.get('/items', (req, res) => {
  const category = req.query.category;
  const price = req.query.price;
  res.send(`Categoría: ${category}, Precio: ${price}`); //SE LO PASO AL CONTROLADOR, Y DE AHI A SERVICIOS
});

//TENGO QUE PONERLO A LO ULTIMO, SI NO, SE SOBREPONE A LAS RUTAS
 app.use((req, res, next) => {
  res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT,() => {
    console.log(`Servidor en http://localhost:${PORT}`);
})