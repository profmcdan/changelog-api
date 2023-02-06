import {Router} from 'express';
import {
    updateCreateValidator,
    updatePointCreateValidator,
    updatePointUpdateValidator,
    updateUpdateValidator
} from "../validators/update.validator";
import {protectRoute} from "../modules/auth";
import {
    createUpdate,
    deleteUpdate,
    getOneUpdate,
    getUpdates,
    updateUpdate } from '../controllers/update.controller'

const updateRouter = Router();

updateRouter.get('/', protectRoute, getUpdates);

updateRouter.get('/:id', protectRoute, getOneUpdate);

updateRouter.post('/',  protectRoute, updateCreateValidator,
  createUpdate);

updateRouter.put('/:id', protectRoute, updateUpdateValidator,
  updateUpdate);

updateRouter.delete('/:id', protectRoute, deleteUpdate);


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
