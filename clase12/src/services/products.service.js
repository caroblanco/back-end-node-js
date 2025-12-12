// products.service.js
// const products = [
//   { id: 1, name: 'Producto 1', price: 1000 },
//   { id: 2, name: 'Producto 2', price: 2000 },
// ];

//import {obtenerProductos} from "../models/products.model.js";

import { obtenerUnProducto, obtenerProductos,agregarProducto,eliminarProducto,actualizarProducto } from "../models/firebase.js";

export const getAllProductsService = async () => {
  return(
    new Promise(async (resolve, reject) => {
        try{
          const productos = await obtenerProductos();
          resolve(productos);
          return productos;
        }catch(error){
          console.log("Error en getAllProductsService:", error);
          reject(error);
        }
    })
  )
};

export const getProductByIdService = async (id) => {
  return(
    new Promise(async (resolve, reject) => {
      try{
        const producto = await obtenerUnProducto(id);
        resolve(producto);
        return producto;
      }catch(error){
        console.log("Error en getProductByIdService:", error);
        reject(error);
      }
    })
  )
  // if (!productos) return null;
  // return productos.find(product => product.id == id);
};


export const addProductService = async (productData) => {
  return(
    new Promise(async (resolve, reject) => {
      try{
        const newProduct = await agregarProducto(productData);
        resolve(newProduct);
      }catch(error){
        reject(error);
      }
    })
  )
}

export const updateProductService = async (id, updateData) => {
  return(
    new Promise(async (resolve, reject) => {
      try{
        const updatedProduct = await actualizarProducto(id, updateData);
        resolve(updatedProduct);
      }catch(error){
        reject(error);
      }
    })
  )
}

export const deleteProductService = async (id) => {
  return(
    new Promise(async (resolve, reject) => {
      try{
        const deletedProduct = await eliminarProducto(id);
        resolve();
      }catch(error){
        reject(error);
      }
    })
  )
}