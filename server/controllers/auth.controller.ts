import mongoose from "mongoose"
import User from "../models/user.model";
import type { NextFunction, Request, Response } from "express";
import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config/env";

interface userDetails {
    email : string | null;
    password : string | null;
    username : string | null;
}
export const signUp = async (req:Request<object,object, userDetails>, res: Response, next: NextFunction) => {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const {email, password ,username} = req.body;

        const existingUser = await User.findOne({$or: [{email:email}, {username : username}]});
        if (existingUser){
            const error = new Error("email Address is already used");
            throw error;
        }

        const salt = await bcrypt.genSalt(10);

        if(password === null || password === undefined){
            return;
        }

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({email, username , password: hashedPassword}, {session});

        if (newUser){
            console.log("successs");
            
        }else {
            console.log("error");
            return;
        }

        const token = jwt.sign({userId: newUser[0]?._id}, JWT_SECRET as string, {expiresIn : '5hrs'});
        await session.commitTransaction();
        await session.endSession();
          
        res.cookie('jwtToken', token, {
            httpOnly : true,
            secure : true,
            sameSite : "strict",
            maxAge : 18000000,
        })

        res.json({
            success : true,
            status : 201,
            message : "created successfully",
            data : {
                token : token,
                user : newUser[0],
            }
        });
        
    }catch (error){
        console.log(error);
        await session.endSession();
        next(error);
    }
}

// export const Signin = async (req,res,next) => {

//     const session = await mongoose.startSession();
//     session.startTransaction();

// }