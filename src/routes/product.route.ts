import {Router} from "express";

const productRouter = Router();

productRouter.get('/', (req, res) => {
    res.send({success: true, data: []});
});

productRouter.get('/:id', (req, res) => {
    res.send({success: true, data: []});
});

productRouter.post('/', (req, res) => {
    res.status(201).send({success: true, data: []});
});

productRouter.put('/:id', (req, res) => {
    res.send({success: true, data: []});
});

productRouter.delete('/:id', (req, res) => {
    res.send({success: true, data: []});
});

export default productRouter;
