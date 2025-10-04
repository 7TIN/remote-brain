import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from "../config/env";
import User from "../models/user.model";
// import type { userDetails } from "../types/types";


// type userType = {
//     userId : 'string | JwtPayload';
// }

interface AuthPayload extends JwtPayload {
  userId: string;
}

const authorize = async(req: Request, res: Response, next: NextFunction ) => {
     try {

        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).json({message : "Unauthorize : no token", success : false})
        }

        const decoded = jwt.verify(token ,JWT_SECRET as string);
        if (typeof decoded !== "object" || !("userId" in decoded)) {
      return res.status(401).json({ message: "Invalid token payload", success: false });
    }

        const { userId } = decoded as AuthPayload;

        const user = await User.findById(userId).select('-password');

        if (!user) {
            return res.status(401).json({success: false, message: 'Unauthorized: user not found' });
        }

        req.userId = user._id.toString();

        res.locals.user = user;
        next();
     }catch(error){
        console.log(error);
     }
}

export default authorize;