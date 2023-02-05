import {body} from "express-validator";

export const newProductValidator = [
    body('name').isString().withMessage('name is required'),
    body('name').isLength({max: 255}).withMessage('name cannot exceed 255 characters')
]
