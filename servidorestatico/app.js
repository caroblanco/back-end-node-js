import express from "express"
import {join, dirname} from "path"
import { fileURLToPath } from "url"

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

// Middleware para registrar las solicitudes, es como un peaje, lo obligo a entrar aca antes de ir a las rutas
//se ejecuta siempre, la clave es el NEXT() que le dice que continue al siguiente middleware o ruta
//se usa para verificacion, control de uso, estadisticas, logueo, autenticacion

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next();
});

app.get('/testmiddleware', (req, res) => {
  res.send('Hola desde Express con middlewares!');
});

app.get('/ping', (req, res) => {
  res.send('Pong');
});