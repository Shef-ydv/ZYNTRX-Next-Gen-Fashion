import mongoose from "mongoose";
const priceSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    variant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Variant"
    },
    amount:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        enum:["USD","INR","EUR","GBP","JPY"],
        default:"INR"
    }
},{
   _id:false,
   _v:false,
});
export default priceSchema