import {Router} from "express";
import {protectRoute} from "../modules/auth";
import {createUser, signIn} from "../services/user.service";

const authRouter = Router();

authRouter.post('/login', signIn);
authRouter.post('/register', createUser)

authRouter.get('/me', protectRoute, (req, res) => {
    // @ts-ignore
    res.send({success: true, data: req.user});
});

export default authRouter;
