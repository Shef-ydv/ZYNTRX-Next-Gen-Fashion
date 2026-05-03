
import './App.css'
import {RouterProvider} from "react-router";
import {router} from "./app.routes";
import {useSelector} from "react-redux";
import {useAuth} from "../features/auth/hook/useAuth";
import {useEffect} from "react";

function App() {
  const {handleGetMe}=useAuth();
  const user=useSelector(state=>state.auth.user);
  console.log(user)

  useEffect(()=>{
    handleGetMe();
  },[])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
