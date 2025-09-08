//pasar informacion por la terminal, inputs

const  args = process.argv.slice(2); //toma los argumentos pasados por consola

if (args[0] == 'saludar'){
    console.log("Hola!", args[1]);
}else if(args[0] == 'despedir'){
    console.log("Adiós!", args[1]);
}  else{
    console.log("No entiendo qué querés hacer");
}

//node script.js saludar caro