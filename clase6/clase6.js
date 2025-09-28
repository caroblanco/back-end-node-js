//ejemplo async

function taskAsync(){
    return(
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() < 0.5){
                    resolve("tarea asíncrona completa"); //devuelve ese string
                }else{
                    reject(new Error("tarea asíncrona fallida"));
                }
                
            }, 2000);
    }))
}

//esto esta mal para llamar a un metodo async
const data = taskAsync()
console.log(data); //Promise { <pending> } - pendiente, no se resolvió aún. no tengo esta info.esta MAL

//es correcto asi
taskAsync().then((data) => {
    console.log(data);
}).catch((error) => { //sin esto, se va todo a la mierda
    console.error(error);
}).finally(() => {
    console.log("tarea asíncrona finalizada");
});


//o usando async y await. le aviso a js que la funcion es asincronica y va a tener que esperar. dentro de una funcion, en algun momento va a enviar a la cola queue, y debe esperar que el proceso vuelva
//try/catch
async function ejemploAsync(){
    try{
        const data = await taskAsync(); //espera a que se resuelva la promesa
        const data2 = await taskAsync();
        const data3 = await taskAsync();
        const data4 = await taskAsync();
        const data5 = await taskAsync();
        console.log(`La promesa devolvio ${data}`);
    }catch(error){
        console.error(error);
    }
}

ejemploAsync()


//fetch: nos permite consumir datos de apis externas. es una promesa.
//response es lo q obtengo de la api, data es esa response convertida a json