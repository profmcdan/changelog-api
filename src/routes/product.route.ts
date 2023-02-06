import {Router} from "express";
import {protectRoute} from "../modules/auth";
import {newProductValidator} from "../validators/product.validator";
import {inputValidationMiddleware} from "../middleware";
import {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct
} from '../controllers/product.controller'

const productRouter = Router();

productRouter.get('/', protectRoute, getProducts);

productRouter.get('/:id', protectRoute, getProductById);

productRouter.post('/', protectRoute, newProductValidator,
  inputValidationMiddleware, createProduct);

productRouter.put('/:id', protectRoute, newProductValidator,
  inputValidationMiddleware, updateProduct);

productRouter.delete('/:id', protectRoute, deleteProduct);

export default productRouter;
