import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "db.json");

async function leerDB(){
    try{
        console.log("Leyendo base de datos desde", filePath);
        const data = fs.readFileSync(filePath, "utf-8");
        console.log("Datos leídos:", data);
        const products = await JSON.parse(data);
        console.log("Productos parseados:", products);
        // parse and return JSON content
        return products
    }catch(error){
        console.log("Error al leer la base de datos", error);
        return null;
    }
}

async function escribirDB(products){
    const data = await JSON.stringify(products);
}

export async function obtenerProductos(){
    const productos = await leerDB();
    return productos;
}