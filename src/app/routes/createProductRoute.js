import express from 'express';
import { createProduct } from '../controllers/newProduct.js';
import multer from 'multer';
import fs from 'fs'

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './src/app/files/')
    },
    filename: function(req, file, cb){
        const uniqueSuffix= Date.now() + '-' + Math.round(Math.random() * 1E9)
         cb(null, `${file.fieldname}-${uniqueSuffix}`)
    }
})

export const files = multer({storage: storage})




router.post("/insert", files.single('image'),createProduct.insert);
router.post("/insertCategory",createProduct.createCategory);

router.get("/allProductsCategory/:category",createProduct.productsCategory);
router.get("/productSelect/:id",createProduct.productSelect);
router.get("/getAllCategory",createProduct.getAllCategory);
router.get("/getAll", createProduct.getAll);
// router.get("/productsCategory", createProduct.ProductsCategory);

export default router;  