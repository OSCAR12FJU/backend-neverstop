// import { productRepositoryInstance } from "../infraestructure/repositories/productsRepository.js"

import { categoryRepositoryInstance } from "../infraestructure/repositories/categoryRespository.js";

export const getAllCategory = async() =>{
  const category = await categoryRepositoryInstance.getAllCategory();
  if(category.length <= 0 ){
    throw new Error("No hay categorias");
  }

  return category;
}