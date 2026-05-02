import productModel from "../models/product.model.js";
import {uploadFile} from "../services/storage.service.js";

export async function createProduct(req,res){
    const {title,description,priceAmount,priceCurrency}=req.body;
    const isSeller=req.user;

    // upload all the images to imagekit and get the urls
    const images=await Promise.all(req.files.map(async(file)=>{
        return await uploadFile({
            buffer:file.buffer,
            fileName:file.originalname
        })
    }))

    // create product in database
    const product =await productModel.create({
        title,
        description,
        price:{
            amount:priceAmount,
            currency:priceCurrency || "INR"
        },
        images,
        seller:isSeller._id
    })

    res.status(201).json({
        message:"Product created successfully",
        product
    })

}