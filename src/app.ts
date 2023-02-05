import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: 'Auth Service up!!'});
});

export default app;
