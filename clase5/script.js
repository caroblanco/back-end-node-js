console.log("hola desde clase 5");

//npm start

const  args = process.argv.slice(2); //toma los argumentos pasados por consola

if (args[0] == 'GET'){
    console.log("Toma un dato: ", args[1]);
}else if(args[0] == 'POST'){
    console.log("Recibi un dato: ", args[1]);
}else if(args[0] == 'PUT'){
    console.log("Actualice un dato: ", args[1]);
}else if(args[0] == 'DELETE'){
    console.log("Borre un dato: ", args[1]);
}