console.log("hola desde clase 5");

//npm start -> va a buscar ese comando en el package.json
//uso type module en el package.json para poder usar import
//import fs from 'fs'; //importa el modulo file system (fs) - es asíncrono
//import fs from 'fs/promises'; //importa el modulo file system (fs) - es asíncrono y usa promesas
//node script.js GET 123

const  args = process.argv.slice(2); //toma los argumentos pasados por consola
//process es un metodo que me permite agarrar informacion pasada por la terminal

if (args[0] == 'GET'){
    console.log("Toma un dato: ", args[1]);
}else if(args[0] == 'POST'){
    console.log("Recibi un dato: ", args[1]);
}else if(args[0] == 'PUT'){
    console.log("Actualice un dato: ", args[1]);
}else if(args[0] == 'DELETE'){
    console.log("Borre un dato: ", args[1]);
}