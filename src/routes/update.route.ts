import {Router} from 'express';

const updateRouter = Router();

updateRouter.get('/', (req, res) => {
    res.send({success: true, data: []});
});

updateRouter.get('/:id', (req, res) => {
    res.send({success: true, data: []});
});

updateRouter.post('/', (req, res) => {
    res.status(201).send({success: true, data: []});
});

updateRouter.put('/:id', (req, res) => {
    res.send({success: true, data: []});
});

updateRouter.delete('/:id', (req, res) => {
    res.send({success: true, data: []});
});

/**
 * Update Points
 */

updateRouter.get('/point', (req, res) => {
    res.send({success: true, data: []});
});

updateRouter.get('/point/:id', (req, res) => {
    res.send({success: true, data: []});
});

updateRouter.post('/point', (req, res) => {
    res.status(201).send({success: true, data: []});
});

updateRouter.put('/point/:id', (req, res) => {
    res.send({success: true, data: []});
});

updateRouter.delete('/point/:id', (req, res) => {
    res.send({success: true, data: []});
});

export default updateRouter;
