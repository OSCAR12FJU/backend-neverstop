import { Product } from "../domain/models/Product.js";
import { productRepositoryInstance } from "../infraestructure/repositories/productsRepository.js";

export const insertProduct = async(productRepositoryInstance, title, price, description, quantity, category,imageUrl) =>{

    const productInsert = new Product(title, price, description, quantity, category, imageUrl);
    if (!productInsert.isValid()){
        throw new Error("Datos de productos invalidos");
    }

    const existProduct = await productRepositoryInstance.findTitleProduct(title);
    if(existProduct){
        throw new Error("El producto ya existe");
    }

    await productRepositoryInstance.save(productInsert);

    return productInsert;
}