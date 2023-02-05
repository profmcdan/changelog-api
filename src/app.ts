import express, {json, urlencoded} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import {authRouter, productRouter, updateRouter, userRouter} from "./routes";
import {customMiddleware} from "./middleware";
import bodyParser from "body-parser";

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(customMiddleware)

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/updates', updateRouter);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Auth Service up!!'});
});

app.all('*', (req, res) => {
    res.status(404).json({message: `Route ${req.originalUrl} not found`})
});

export default app;
