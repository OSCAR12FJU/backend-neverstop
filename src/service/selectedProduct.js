import { productRepositoryInstance } from "../infraestructure/repositories/productsRepository.js"

export const selectedProduct = async(id) =>{
  
  const products = await productRepositoryInstance.selectProduct(id)

  if(products.length <= 0 ){
    throw new Error("Producto no encontrado");
  }

  return products;
}