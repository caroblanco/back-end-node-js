import express from 'express';
const app = express();

app.get('/', (req, res) => { 
    res.send('Hola, mundo desde Express!'); 
});

app.get('/2', (req, res) => { 
    res.send('Hola, mundo desde Express! (ruta2)'); 
});

//el req es el cuerpo de solicitud que nos manda el cliente, es la data del body que viene en la solicitud, los headers

// la barra es un punto de acceso a mi servidor, la ruta raiz, es un recurso

//nos da una api ya generada masomenos

app.listen(3000, () => { 
    console.log('Servidor en http://localhost:3000'); 
});

//creo servidor con express, mas sencillo que nativo, es una libreria que instalo