import mongoose from "mongoose"



export const Signup = async (req,res,next) => {

    const session = await mongoose.startSession();
    session.startTransaction();

    // try {

    // }catch (error){
    //     console.log(error);
    // }
}


export const Signin = async (req,res,next) => {

    const session = await mongoose.startSession();
    session.startTransaction();

}