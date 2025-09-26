import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : false,
        unique : true,
        trim : true,
    },

    email : {
        type : String,
        require : [true, "Email is required"],
        unique : true,
        trim : true,
        match : [/\S+@\S+\.\S+/, "Enter valid email address"]
    },

    password : {
        type : String,
        require : true,
        minLength : 6
    }
});

const User = mongoose.model('User', userSchema);


export default User;