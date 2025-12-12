import express from 'express';
import {getAllProducts,getProductById,addProduct,deleteProduct,updateProduct} from '../controllers/products.controller.js';


const routes = express.Router();

// routes.get("/products",(req,res) => {
//     res.send("lista de productos")
// })

routes.get("/products",getAllProducts);

//llamo al controlador, que tiene la rta
routes.get("/products/:id",getProductById);

routes.post("/products/create", addProduct)

routes.delete("/products/:id", deleteProduct)

routes.put("/products/:id", updateProduct)

export default routes;