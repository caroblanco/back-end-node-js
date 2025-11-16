// products.service.js
// const products = [
//   { id: 1, name: 'Producto 1', price: 1000 },
//   { id: 2, name: 'Producto 2', price: 2000 },
// ];

import {obtenerProductos} from "../models/products.model.js";

export const getAllProductsService = async () => {
  const productos = await obtenerProductos();
  return productos;
};

export const getProductByIdService = async (id) => {
  const productos = await obtenerProductos();
  if (!productos) return null;
  return productos.find(product => product.id == id);
};
