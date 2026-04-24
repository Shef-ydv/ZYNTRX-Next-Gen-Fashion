import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    contact_no:{type:String,required:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    role:{
        type:String,
        enum:["buyer","seller"],
        default:"buyer"
    }
})

// database mai kuch bhi save krne se pehle password ko hash krna h taaki data secure rhe database mai
// ye ek middle ware h usermodel schema ka

userSchema.pre("save",async function(){
    if(!this.isModified("password")){
        return;
    }
    const hash=await bcrypt.hash(this.password,10);
    this.password=hash;
})

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

const userModel=mongoose.model("user",userSchema);
export default userModel;