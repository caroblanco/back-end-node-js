// products.controller.js
import {getAllProductsService,getProductByIdService,addProductService,deleteProductService,updateProductService} from '../services/products.service.js';


export const getAllProducts = async (req, res) => {
  try{
        const products = await getAllProductsService();
      res.status(200).json(products);
      console.log("Productos enviados:", products);
  }catch(error){
    console.log("Error en getAllProducts controller:", error);
    res.status(500).json({message: "Error al obtener productos"});
  }

};

export const getProductById = async (req, res) => {
  //espero el proceso asincronico
  try{
    const id = req.params.id;
    if(!id){
       res.status(400).json({message: "ID de producto no proporcionado"});
    }
    const product = await getProductByIdService(id);
    if(!product){
       res.status(404).json({message: "Producto no encontrado"});
    }
    res.status(200).json(product);
    console.log("Producto enviado:", product);
  }catch(error){
    console.log("Error en getProductById controller:", error);
    res.status(500).json({message: "Error al obtener producto por ID"});
  }

};

export const addProduct = async (req, res) => {
  try{
    const productData = req.body;
    const newProduct = await addProductService(productData);
    res.status(200).json(newProduct);
  }catch(error){
    res.status(500).json({message: "Error al agregar producto"});
  }

}

export const updateProduct = async (req, res) => {
  try{
    const id = req.params.id;
    const updateData = req.body;
    if(id && updateData){
      const updatedProduct = await updateProductService(id, updateData);
      res.status(200).json(updatedProduct);
    }else{
      res.status(400).json({message: "Faltan datos para actualizar el producto"});
    }
  }catch(error){
    res.status(500).json({message: "Error al actualizar producto"});
  }
}

export const deleteProduct = async (req, res) => {
    try{
    const id = req.params.id;
    if(!id){
       res.status(400).json({message: "ID de producto no proporcionado"});
    }

    await deleteProductService(id);
    res.status(200).json({message: "Producto eliminado correctamente"});
  }catch(error){
    res.status(500).json({message: "Error al eliminar producto"});
  }
}

