
import mongoose from "mongoose";
import { DATABASE_URL } from "../config/env";

const connectToDb = async () => {

    try{
        await mongoose.connect(DATABASE_URL as string);
        console.log("connected successfully");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
    // mongoose.connect(url, {
    // })
}

export default connectToDb;