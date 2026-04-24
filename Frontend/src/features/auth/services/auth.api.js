import axios from "axios";
const authApiInstance=axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withcredentials:true
})

export async function register({email,contact,password,fullname,isSeller}){
    const response=await authApiInstanse.post("register",{
        email,
        contact,
        password,
        fullname,
        isSeller
    })
    return response.data;
}