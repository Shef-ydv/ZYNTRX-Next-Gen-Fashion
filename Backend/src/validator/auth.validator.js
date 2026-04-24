import { body, validationResult } from "express-validator";
// data galat na jaye database mai isliye validator banaya h jo check krta h



function validateRequest(req,res,next){
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }
    next();
}

export const validateRegisterUser=[
    body("email")
        .isEmail()
        .withMessage("Please provide a valid email address"),
    body("contact_no")
        .notEmpty()
        .withMessage("Contact number is required")
        .matches(/^\d{10}$/)
        .withMessage("Contact number must be a 10-digit number"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    body("fullname")
        .notEmpty()
        .withMessage("Full name is required")
        .isLength({ min: 3 })
        .withMessage("Full name must be at least 3 characters long"),
    body("isSeller")
        .isBoolean()
        .withMessage("isSeller must be a boolean value"),

    validateRequest
    
]