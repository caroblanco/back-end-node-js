//Recibir solicitudes: Procesa la solicitud HTTP del cliente desde una ruta.
// Procesar la solicitud: Extrae información relevante y realiza validaciones necesarias.
// Interactuar con el modelo/servicio: Realiza operaciones necesarias con los datos o lógica de negocio.
// Generar una respuesta: Crea y envía una respuesta HTTP al cliente



export const getAllProducts = async (req, res) => {
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product.id == id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};