import { Router } from "express";
import {validateRegisterUser} from "../validator/auth.validator.js";  
import {register} from "../contrallers/auth.controller.js";

const router = Router();

router.post("/register",validateRegisterUser, register);

export default router;