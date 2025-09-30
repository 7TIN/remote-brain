import { Router } from "express";
import { signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signup",signUp);
// authRouter.post("/signin",SignIn);
// authRouter.post("/signup",Signup);

export default authRouter;