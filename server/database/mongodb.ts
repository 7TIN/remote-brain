
import mongoose from "mongoose";

const url = "fakeUrl"
const connectDb = async () => {

    try{
        await mongoose.connect(url);
        console.log("connected succfully");
    }catch(error){
        console.log(error);
        process.exit(1);
    }

    // mongoose.connect(url, {

    // })

}


export default connectDb