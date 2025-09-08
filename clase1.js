console.log("Hola Mundo");

//como declarar funciones
function saludar1(){
    console.log("Hola Mundo 1");
}


const saludar2 = function(){
    console.log("Hola Mundo 2");
}

const saludar3 = () => {
    console.log("Hola Mundo 3");
}

const sumar = (a, b) => a + b;

const sumar2 = (a, b) => {
    return a + b;
}

sumar(1, 2);


function calculadora(num1, num2, operacion){
    return operacion(num1, num2);
}

suma = calculadora(3,4,(a,b)=> a + b);
resta = calculadora(3,4,(a,b)=> a - b);
multiplicacion = calculadora(3,4,(a,b)=> a * b);
division = calculadora(3,4,(a,b)=> a / b);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);


//arrays
//let es variable, const es fijo
let frutas = ["manzana", "banana", "cereza", "kiwi"];
const verduras = new Array("lechuga", "tomate", "cebolla");

frutas.push("naranja"); //agrega al final
frutas.pop(); //elimina el ultimo


//.join une elementos de un array en un string
const frutasjoin = frutas.join(", ");

//.map crea un nuevo array con los resultados de una funcion
const frutasmayus   = frutas.map(fruta => fruta.toUpperCase());

//.filter crea un nuevo array con elementos filtrados por una condicion
const frutasconA   = frutas.filter(fruta => fruta.includes("a"));

//.reduce reduce el array a un solo valor acumulado por una funcion. estado final de variable acumulacion
const frutasreduce = frutas.reduce((acum, fruta) => acum + ", " + fruta);

//.concat concatenar dos arrays en un string
const frutasverduras = frutas.concat(verduras);

//.foreach recorre un array y ejecuta una funcion por cada elemento, en el mismo array, no crea uno nuevo. tengo indice
frutas.forEach((fruta, indice) => console.log(`fruta numero ${indice}: ${fruta}`));

//for of, no tengo indice
for (const fruta of frutas) {
    console.log(fruta);
}

//con comillas simples invertidas puedo acceder al dato, con dobles no
console.log(`fruta numero 2: ${frutas[2]}`);
console.log("fruta numero 2: " + frutas[2]);




//EJERCICIO 1
const precios = [10,11,34,78,90,65,32,67,899,100];
const preciosconIVA = precios.map(precio => precio * 1.21);

console.log(preciosconIVA);
preciosconIVA.forEach((precio, indice) => console.log(`precio numero ${indice}: ${precio}`));

//OBJETOS: simular el mundo real, representar algo en la vida real. clave/valor. son dinamicos
//this busca dentro de ese objeto, el valor de la clave
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
};

console.log(persona);

//clases: molde para crear objetos nuevos. creo objetos con la funcion constructora.
function Persona1(nombre, edad, ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad; 
    this.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona1("Ana", 25, "Barcelona");
const persona2 = new Persona1("Luis", 35, "Valencia");

persona1.saludar();
persona2.saludar();

// si quiero usar clases
class Persona{
    constructor(nombre, edad, ciudad){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad; 
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

//herencia
class Estudiante extends Persona{
    constructor(nombre, edad, ciudad, curso){
        super(nombre, edad, ciudad); //llama al constructor de la clase padre
        this.curso = curso;
    }
    estudiar(){
        console.log(`Estoy estudiando ${this.curso}.`);
    }
}

const estudiante1 = new Estudiante("Marta", 22, "Sevilla", "JavaScript");
estudiante1.saludar();
estudiante1.estudiar();

//destructurar un array o un objeto: descomponer, extraer sus datos, claves, valores y los asignamos a variables
//spread operator {...}
const personaCompleta = {...persona, pais: "España"}; //crea un nuevo objeto con las claves y valores del objeto persona y le agrega la clave pais

//copiar un objeto
const personaCopia = {...persona}; //crea un nuevo objeto con las claves y valores del objeto persona

//destructurar un objeto
const {nombre, edad} = persona; //extrae las claves nombre y edad del objeto persona, si ya se las claves
const nombre_persona = persona.nombre; //asi es sin destructuracion

//puedo renombrar las variables dentro de un objeto
const {ciudad: lugar} = persona; //extrae la clave ciudad del objeto persona y la asigna a la variable lugar

//Array
const numeros = [1,2,3,4,5];
const [num1, num2] = numeros; //extrae los dos primeros valores del array numeros y los asigna a las variables num1 y num2

//rest operator
const [primero, ...resto] = numeros; //extrae el primer valor del array numeros y el resto los asigna a la variable resto como un array
console.log(resto)

//saltar elementos
const [,,tercero] = numeros; //extrae el tercer valor del array numeros y lo asigna a la variable tercero

//spreads
const numerosCopia = [...numeros]; //crea un nuevo array con los valores del array numeros

//EJERCICIO 2
class Auto{
    constructor(marca, modelo, anio, color){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color; 
    }

    mostrarInfo(){
        console.log(`Auto: ${this.marca} ${this.modelo}, Año: ${this.anio}, Color: ${this.color}`);
    }
}

const auto1 = new Auto("Toyota", "Corolla", 2020, "Rojo");
const auto2 = new Auto("Honda", "Civic", 2019, "Azul");

const vehiculos = [auto1, auto2];

console.log(vehiculos);

vehiculos.forEach((vehiculo) => {
    if(vehiculo.anio > 2019){
        console.log(`El auto ${vehiculo.marca} ${vehiculo.modelo} es nuevo.`);
    }
})

function getColor(colorp, lista){
    lista.forEach((vehiculo) => {
        const {color} = vehiculo
        if (colorp ==color){
            contador++
            console.log(`El auto ${vehiculo.marca} ${vehiculo.modelo} es de color ${color}.`);
        }
    })
    console.log(`Hay ${contador} autos de color ${colorp}.`);
}

getColor("Rojo", vehiculos);
