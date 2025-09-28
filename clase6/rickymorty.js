/*
fetch("https://rickandmortyapi.com/api/character",{
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(async (response) => {       //capturo la respuesta
    const data = await response.json(); //capturo la rta dentro de data, en formato json
    console.log(data.results[0]);
    console.log(data.results[1]);
    console.log(data.results[2]);
    console.log(data.results[3]);
    console.log(data.results[4]);
    //data.results.slice(0,5).map((character) => console.log(character)); 
}).catch((error)=>{
    console.error(error);
}).finally(()=>{
    console.log("fetch finalizado");
})
*/

//mismo que arriba pero FUNCION ASYNC
//no uso el then, uso await y try

async function obtenerPersonaje(){
    try{
        const respones = await fetch("https://rickandmortyapi.com/api/character",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }})
        const data = await response.json(); //capturo la rta dentro de data, en formato json
        console.log(data.results[0]);
        console.log(data.results[1]);
        console.log(data.results[2]);
        console.log(data.results[3]);
        console.log(data.results[4]);
        //data.results.slice(0,5).map((character) => console.log(character)); 
}catch(error){
    console.error(error);
}
}

//LA DIFERENCIA ES QUE ASYNC/AWAIT ES MAS LEGIBLE, SIMPLIFICA EL CODIGO. ME AHORRO TRABAJO
//puedo hacer muchos fetchs en un try

obtenerPersonaje();
console.log("esto se ejecuta antes que el fetch, porque el fetch es asíncrono"); //se ejecuta antes que el fetch, porque el fetch es asíncrono.cuand llega al await, ahi pasa a la sisguiente linea
