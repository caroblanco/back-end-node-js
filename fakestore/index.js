async function obtenerProductos(){
    try{
        const response = await fetch("https://fakestoreapi.com/products",{
        method: "GET"
        })
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

async function obtenerUnProducto(id){
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`,{
        method: "GET"
        })
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

async function aniadirProducto(product){
    try{
        const response = await fetch(`https://fakestoreapi.com/products`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    const data = await response.json();
    console.log(data);
    }catch(error){
        console.error(error);
    }
}

async function eliminarProducto(id){
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`,{
        method: "DELETE"
        })
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

async function actualizarProducto(product){
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${product.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    const data = await response.json();
    console.log(data);
    }catch(error){
        console.error(error);
    }
}



const  args = process.argv.slice(2); //toma los argumentos pasados por consola
console.log(args);

if (args[0] == 'get'){
    console.log("get", args[1]);
    if (args[1] == 'products'){
        obtenerProductos();
    }else{
        obtenerUnProducto(args[1]);
    }
}else if(args[0] == 'post'){
    console.log("Post", args[1]);
    aniadirProducto({
    //"id": 21,
    "title": args[2],
    "price": args[3],
    //"description": "lorem ipsum set",
    //"image": "https://i.pravatar.cc",
    "category": args[4]
    });
}else if (args[0] == 'delete'){
    console.log("delete");
    eliminarProducto(args[1]);
}else{
    console.log("comando erroneo");
}



// actualizarProducto({
//     "id": 1,
//     "title": "test3 producto",
//     "price": 13.5,
//     "description": "lorem ipsum set",
//     "image": "https://i.pravatar.cc",
//     "category": "electronic"
// });

