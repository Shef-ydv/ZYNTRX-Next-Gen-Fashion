import express from 'express';
import { autheticateUser } from '../middlewares/auth.middleware.js';
import { validateAddToCart } from '../validator/cart.validator.js';
import { addToCart,getCart } from '../controllers/cart.controller.js';

const router=express.Router();

router.post("/add/:productId/:variantId",autheticateUser,validateAddToCart,addToCart)
router.get("/",autheticateUser,getCart);

export default router;