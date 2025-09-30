import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/env";
import User from "../models/user.model";


const authorize = async( req: Request, res: Response, next: NextFunction ) => {
     try {

        const token = req.cookies.jwtToken;

        if (!token) {
            res.status(401).json({message : "Unauthorize : no token", success : false})
        }

        const decoded = jwt.verify(token,JWT_SECRET as string)

        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(401).json({success: false, message: 'Unauthorized: user not found' });
        }
     }catch(error){
        console.log(error);
     }
}

export default authorize;