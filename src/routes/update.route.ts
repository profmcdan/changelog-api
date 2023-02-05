import {Router} from 'express';
import {
    updateCreateValidator,
    updatePointCreateValidator,
    updatePointUpdateValidator,
    updateUpdateValidator
} from "../validators/update.validator";
import {protectRoute} from "../modules/auth";

const updateRouter = Router();

updateRouter.get('/', (req, res) => {
    res.send({success: true, data: []});
});

updateRouter.get('/:id', (req, res) => {
    res.send({success: true, data: []});
});

updateRouter.post('/',  protectRoute, updateCreateValidator, (req, res) => {
    res.status(201).send({success: true, data: []});
});

updateRouter.put('/:id', protectRoute, updateUpdateValidator,  (req, res) => {
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

updateRouter.post('/point', protectRoute, updatePointCreateValidator,  (req, res) => {
    res.status(201)
    res.send({success: true, data: req.body});
});

updateRouter.put('/point/:id', protectRoute, updatePointUpdateValidator,  (req, res) => {
    res.send({success: true, data: req.body});
});

updateRouter.delete('/point/:id', (req, res) => {
    res.send({success: true, data: []});
});

export default updateRouter;
