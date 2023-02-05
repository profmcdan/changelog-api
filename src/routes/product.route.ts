import { body, validationResult } from "express-validator";
import {Router} from "express";
import {protectRoute} from "../modules/auth";
import {newProductValidator} from "../validators/product.validator";
import {inputValidationMiddleware} from "../middleware";

const productRouter = Router();

productRouter.get('/', protectRoute, (req, res) => {
    res.send({success: true, data: []});
});

productRouter.get('/:id', (req, res) => {
    res.send({success: true, data: []});
});

productRouter.post('/', protectRoute, newProductValidator, inputValidationMiddleware, (req, res) => {
    res.status(201);
    res.send({success: true, data: req.body, user: req.user});
});

productRouter.put('/:id', newProductValidator, inputValidationMiddleware, (req, res) => {
    res.send({success: true, data: req.body});
});

productRouter.delete('/:id', (req, res) => {
    res.send({success: true, data: []});
});

export default productRouter;
