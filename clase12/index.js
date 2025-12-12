import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';
import rutasLog from './src/routes/auth.routes.js';
import bodyParser from 'body-parser';
import { authentication } from './src/middleware/aunthenticator.js';

const app = express();
const PORT = process.env.PORT || 3000;
const corsConfig = {
    origin: ['http://localhost:3000/', 'https://midominio.com/'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  
    allowedHeaders: ['Content-Type', 'Authorization'],       
    exposedHeaders: ['Content-Length'],                        
    credentials: true,                                      
    maxAge: 600,                                               
    optionsSuccessStatus: 204                                  
}

app.use(cors(corsConfig));
app.use(express.json());

app.use('/api',rutasLog)
app.use(authentication);


app.use((req,res,next) =>{
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
})

app.use("/api", productsRouter);



app.use((req, res, next) => {
  res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT,() => {
    console.log(`Servidor en http://localhost:${PORT}`);
})