import prisma from "../config/db";
import {comparePassword, createJwt, hashPassword} from "../modules/auth";

export const createUser = async (req, res) => {
    const hashedPassword = await hashPassword(req.body.password);
    const user =  await prisma.user.create({
        data: {
            email: req.body.email.toLowerCase().trim(),
            name: req.body.name,
            password: hashedPassword
        }
    });
    res.status(201).json({success: true, data: user});
}

export const signIn = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email.toLowerCase().trim()
        }
    });
    if(user){
        const isPasswordValid = comparePassword(req.body.password, user.password);
        if(isPasswordValid){
            res.send({success: true, data: {accessToken: createJwt(user)}})
            return;
        }
    }
    res.status(401)
    res.send({success: true, detail: 'Invalid username or password'});
}
