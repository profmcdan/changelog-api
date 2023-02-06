import { Router } from 'express';
import { protectRoute } from '../modules/auth';
import {
  createUser,
  getLoggedInUser,
  signIn,
} from '../controllers/user.controller';

const authRouter = Router();

authRouter.post('/login', signIn);
authRouter.post('/register', createUser);

authRouter.get('/me', protectRoute, getLoggedInUser);

export default authRouter;
