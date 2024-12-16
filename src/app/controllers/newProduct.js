import { json } from "express";
import { productRepositoryInstance } from "../../infraestructure/repositories/productsRepository.js";
import { getAllCategory } from "../../service/getAllCategory.js";
import { getAllProducts } from "../../service/getAllProducts.js";
import { insertCategory } from "../../service/insertCategory.js";

import { insertProduct } from "../../service/insertProduct.js";
import { filterProductsCategory } from "../../service/filterProductsCategory.js";
import { selectedProduct } from "../../service/selectedProduct.js";

export const createProduct = {
    insert: async (req, res) =>{
        const {title, price, description, quantity, category} = req.body;


    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    // Construir la URL del archivo
    const imageUrl = `http://localhost:3001/files/${req.file.filename}`;


        try{
            const newProduct = await insertProduct(productRepositoryInstance,title, price, description, quantity, category,imageUrl);
            res.status(201).json({
                message:"producto ingresado correctamente",
                product: newProduct,
            }) 
        } catch(error){
            res.status(500).json({
                error:error.message,
                content: req.file
            });
        }
    },
    createCategory: async (req, res) =>{
        const {category} = req.body;
        try{
            const newCategory = await insertCategory(category)
            res.status(201).json({
                message:"categoria ingresada correctamente",
                category: newCategory,
            }) 
        } catch(error){
            res.status(500).json({
                error:error.message,
            });
        }
    },
    getAll: async (req, res) => {
        try{
            const products = await getAllProducts();
            res.status(201).json({
                message: "Petición realizada con exito",
                products: products
            })
        }catch(error){
            res.status(400).json({error:error.message});
        }
    },
    getAllCategory: async (req, res) => {
        try{
            const category = await getAllCategory();
            res.status(201).json({
                message: "Petición realizada con exito",
                category: category
            })
        }catch(error){
            res.status(400).json({error:error.message});
        }
    }, 
    productsCategory: async(req, res) =>{
        const {category} = req.params;
        try{
            const products =  await filterProductsCategory(category);
            res.status(201).json({
                message: "Petición realizada con exito",
                products: products
            })
        }catch(error){
            res.status(400).json({error: error.message});
        }
    },
    productSelect: async(req, res) =>{
        const {id} = req.params;
        try{
            const product =  await selectedProduct(id);
            res.status(201).json({
                message: "Petición realizada con exito",
                products: product
            })
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }
}