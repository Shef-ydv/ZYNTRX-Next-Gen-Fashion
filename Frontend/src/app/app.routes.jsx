import {createBrowserRouter} from "react-router";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import CreateProduct from "../features/products/pages/createProduct";
import { Navigate } from "react-router";

export const router=createBrowserRouter([
    {
    path: "*",
    element: <Navigate to="/" replace />
    },

    {
        path:"/",
        element:<h1>Hello World</h1>

    },
    {
        path:"/register",
        element:<Register />

    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/seller/create-product",
        element:<CreateProduct />
    }
])
