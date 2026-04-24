import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import {config} from "../db/config.js"

async function sendTokenResponse(req,res,message){
    const token=jwt.sign({
        id:user._id
    },config.JWT_SECRET,{
        expiresIn:"7d"  
    })

    res.cookie("token",token)

    res.status(200).json({
        message,
        success:true,
        token,
        user:{
            id:user._id,
            email:user.email,   
            contact:user.contact,
            fullname:user.fullname,
            role:user.role
        }
    })
}


export const register=async(req,res)=>{
    const {email,contact,password,fullname,isSeller}=req.body;
    try{
        const existingUser=await userModel.findOne({
            $or:[
                {email},
                {contact}
            ]
        })

        if(existingUser){
            return res.status(400).json({message:"User with this email or contact number already exists"});
        }

        const user=await userModel.create({
            email,
            contact,
            password,
            fullname,
            role:isSeller?"seller":"buyer"
        })

        await sendTokenResponse(user,res,"User registered successfully");

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}