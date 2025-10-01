import { Router } from "express";
import { logout, Signin, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/signup',signUp);
authRouter.post('/signin',Signin);
authRouter.post('/logout',logout);

export default authRouter;