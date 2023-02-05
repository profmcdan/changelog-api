import {Router} from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({success: true, data: []});
});

userRouter.get('/:id', (req, res) => {
    res.send({success: true, data: {}});
});

userRouter.post('/', (req, res) => {
    res.status(201).send({success: true, data: {}});
});

userRouter.put('/:id', (req, res) => {
    res.send({success: true, data: {}});
});

userRouter.delete('/:id', (req, res) => {
    res.send({success: true});
});

export default userRouter;
