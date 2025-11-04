const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, mundo!');
});

server.listen(3000, () => {
  console.log(`Servidor corriendo en http://localhost:3000`);
});

//el servidor esta corriendo esperando solicitudes en el puerto 3000 - corro npm start