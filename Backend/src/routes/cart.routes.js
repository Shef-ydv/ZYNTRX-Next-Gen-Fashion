import express from 'express';
import { autheticateUser } from '../middlewares/auth.middleware.js';
import { validateAddToCart,validateIncrementCartItemQuantity } from '../validator/cart.validator.js';
import { addToCart,getCart,incrementCartItemQuantity } from '../controllers/cart.controller.js';

const router=express.Router();

router.post("/add/:productId/:variantId",autheticateUser,validateAddToCart,addToCart)
router.get("/",autheticateUser,getCart);
router.patch("/quantity/increment/:productId/:variantId",autheticateUser,validateIncrementCartItemQuantity,incrementCartItemQuantity);

export default router;