import mongoose from "mongoose";
import User from "../models/user.model";
import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";
import type { userDetails } from "../types/types";

export const signUp = async (
    req: Request<object, object, userDetails>,
    res: Response,
    next: NextFunction,
) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { email, password, username } = req.body;

        const existingUser = await User.findOne({
            $or: [{ email: email }, { username: username }],
        });
        if (existingUser) {
            const error = new Error("email Address is already used");
            throw error;
        }

        const salt = await bcrypt.genSalt(10);

        if (password === null || password === undefined) {
            return;
        }

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create(
            { email, username, password: hashedPassword },
            { session },
        );

        if (newUser) {
            console.log("successs");
        } else {
            console.log("error");
            return;
        }

        // const token = jwt.sign(
        //     { userId: newUser[0]?._id },
        //     JWT_SECRET as string,
        //     {
        //         expiresIn: "5hrs",
        //     },
        // );
        await session.commitTransaction();
        await session.endSession();

        res.json({
            success: true,
            status: 201,
            message: "created successfully",
            // data: {
            //     token: token
            // },
        });
    } catch (error) {
        console.log(error);
        await session.endSession();
        next(error);
    }
};

export const Signin = async (
    req: Request<object, object, userDetails>,
    res: Response,
    next: NextFunction,
) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error("User not found");
            // error.statusCode = 404;
            throw error;
        }

        if (
            password === null ||
            password === undefined ||
            user.password === null ||
            user.password === undefined
        ) {
            return;
        }

        const isPassValid = await bcrypt.compare(password, user.password);

        if (!isPassValid) {
            const error = new Error("Invalid password");
            // error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET as string, {expiresIn: "5hrs"});
        res.status(200).json({
            success: true,
            message: "User signed in successfully",
            data: {
                token
            },
        });
    } catch (error) {
        next(error);
    }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.clearCookie("jwtToken", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    } catch (error) {
        console.log(error);
        next();
    }
};
