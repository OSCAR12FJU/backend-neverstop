import { categoryRepositoryInstance } from "../infraestructure/repositories/categoryRespository.js"

export const insertCategory = async(category) =>{

    const categoryInsert = await categoryRepositoryInstance.findCategory(category);
    if(categoryInsert){
        throw new Error("La categoria ya existe");
    }

    await categoryRepositoryInstance.save(category);

    return category;
}
