import { productRepositoryInstance } from "../infraestructure/repositories/productsRepository.js"

export const filterProductsCategory = async(category) =>{
  
  const products = await productRepositoryInstance.filterCategory(category);
  if(products.length <= 0 ){
    throw new Error("No hay productos con esa categoria");
  }

  return products;
}