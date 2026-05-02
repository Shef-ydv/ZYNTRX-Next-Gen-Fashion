import express from 'express';
import {authenticateSeller} from "../middlewares/auth.middleware.js";
import productModel from "../models/product.model.js";
import {createProduct} from "../controllers/product.controller.js";
import {createProductValidator} from "../validator/product.validator.js";
import multer from "multer";

const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:5*1024*1024
    }
})

const router=express.Router();

router.post("/",authenticateSeller,createProductValidator,upload.array('images',7),createProduct);



export default router;