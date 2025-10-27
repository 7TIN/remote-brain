import type { Request, Response, NextFunction} from "express"

interface CustomError extends Error {
    statusCode?: number;
    code?: number;
    errors?: Record<string, {message:string}>;
}
const errorMiddleware = (err: CustomError ,req : Request, res:Response, next:NextFunction) => {
    try {
        let error:CustomError = {...err};
        
        error.message = err.message;
        // console.error("Error: ", err);

        if(err.name === 'TokenExpiredError') {
            error = new Error("Token Expired. Please log in again") as CustomError;
            error.statusCode = 401;
        }

        if(err.name === "JsonWebTokenError") {
            error = new Error("Invalid token") as CustomError;
            error.statusCode = 401;
        }

        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || "Internal Server Error",
        });
    }catch (Error){
        next(Error);
    }

}

export default errorMiddleware;