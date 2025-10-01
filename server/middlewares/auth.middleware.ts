import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from "../config/env";
import User from "../models/user.model";
// import type { userDetails } from "../types/types";


// type userType = {
//     userId : 'string | JwtPayload';
// }


const authorize = async(req: Request, res: Response, next: NextFunction ) => {
     try {

        const token = req.headers['authorization'];

        if (!token) {
            res.status(401).json({message : "Unauthorize : no token", success : false})
        }

        const decoded = jwt.verify(token as string,JWT_SECRET as string) as JwtPayload;

        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(401).json({success: false, message: 'Unauthorized: user not found' });
        }

        res.locals.user = user;
        next();
     }catch(error){
        console.log(error);
     }
}

export default authorize;