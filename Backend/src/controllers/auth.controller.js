import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../db/config.js";

function sendTokenResponse(user, res, message) {
    const token = jwt.sign(
        { id: user._id },
        config.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.cookie("token", token);

    res.status(200).json({
        success: true,
        message,
        token,
        user: {
            id: user._id,
            email: user.email,
            contact: user.contact,
            fullname: user.fullname,
            role: user.role
        }
    });
}

export const register = async (req, res) => {
    const { email, contact, password, fullname, isSeller } = req.body;

    try {
        const existingUser = await userModel.findOne({
            $or: [
                { email },
                { contact }
            ]
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User with this email or contact number already exists"
            });
        }

        const user = await userModel.create({
            email,
            contact,
            password,
            fullname,
            role: isSeller ? "seller" : "buyer"
        });

        sendTokenResponse(user, res, "User registered successfully");

    } catch (error) {
        console.log("REGISTER ERROR:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    const user=await userModel.findOne({email});
    if(!user){
        return res.status(400).json({message:"Invalid email or password"});
    }
    const isMatch=await user.comparePassword(password);

    if(!isMatch){
        return res.status(400).json({message:"Invalid email or password"});
    }

    await sendTokenResponse(user,res,"Login successful");
}

export const googleCallback=async (req,res)=>{
    const {id,displayName,emails,photos}=req.user;
    const email=emails[0].value;
    const profilePic=photos[0].value;
    let user=await userModel.findOne({
        email
    })
    if(!user){  
        await userModel.create({
            email,
            googleId:id,
            fullname:displayName,
        })
    }
    const token=jwt.sign({
        id:user._id,
    },config.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.cookie("token",token);
    res.redirect("http://localhost:5173/");
}