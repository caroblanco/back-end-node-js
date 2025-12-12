import {db} from '../data/data.js';
import { doc, getDoc,collection, getDocs,setDoc,addDoc,updateDoc, deleteDoc } from "firebase/firestore";

function obtenerUnProducto(id){
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            console.log(docSnap);
            if (docSnap.exists()) {
                resolve(docSnap.data());
            } else {
                reject(new Error("No such document!"));
            }
        } catch (error) {
            reject(error);
        }
    });
}

function obtenerProductos(){
    return new Promise(async (resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            const productos = [];
            querySnapshot.forEach((doc) => {
                productos.push({ id: doc.id, ...doc.data() });
            });
            console.log("Productos obtenidos:", productos);
            resolve(productos);
        } catch (error) {
            console.log("Error al obtener productos:", error);
            reject(error);
            
        }
    });
}

function agregarProducto(producto){
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = await addDoc(collection(db, "products"), producto);
            console.log("Producto agregado con ID:", docRef.id);
            resolve({ id: docRef.id, ...producto });
        } catch (error) {
            console.log("Error al agregar producto:", error);
            reject(error);
            
        }
    });
}

function actualizarProducto(id, producto){
    return new Promise(async (resolve, reject) => {
        try {
            // producto is expected to be an object with fields to update, e.g. { price: 123 }
            // updateDoc expects an object with the fields to update
            await updateDoc(doc(db, "products", id), producto);
            console.log("Producto actualizado con ID:", id);
            resolve({ id, ...producto });
        } catch (error) {
            console.log("Error al actualizar producto:", error);
            reject(error);
        }
    });
}

function eliminarProducto(id){
    return new Promise(async (resolve, reject) => {
        try {
            await deleteDoc(doc(db, "products", id));
            console.log("Producto eliminado con ID:", id);
            resolve();
        } catch (error) {
            console.log("Error al eliminar producto:", error);
            reject(error);
        }
    });
}

export {
    obtenerUnProducto,
    obtenerProductos,
    agregarProducto,
    actualizarProducto,
    eliminarProducto
};

