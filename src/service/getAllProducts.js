import { productRepositoryInstance } from "../infraestructure/repositories/productsRepository.js"

export const getAllProducts = async() =>{
  const products = await productRepositoryInstance.getAllProducts();
  if(products.length <= 0 ){
    throw new Error("No hay produductos");
  }

  return products;
}