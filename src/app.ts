import express from 'express';
import {productRouter, updateRouter, userRouter} from "./routes";

const app = express();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/updates', updateRouter);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Auth Service up!!'});
});

export default app;
