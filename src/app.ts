import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { authRouter, productRouter, updateRouter, userRouter } from './routes';
import { customMiddleware } from './middleware';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(customMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/updates', updateRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Auth Service up!!' });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

app.use((err, res, req, next) => {
  if (err.type === 'auth') {
    res.status(401).send({ success: false, detail: 'Unauthorized' });
  } else if (err.type === 'input') {
    res.status(400).send({ success: false, error: 'input errors' });
  } else {
    res.status(500).send({ success: false, error: err.toString() });
  }
});

export default app;
