import mongoose from "mongoose";

const linkShema = new mongoose.Schema({
    hash : {
        type : String,
        require : true,
    },

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require : true,
    }
})

const Link = mongoose.model('Link', linkShema);

export default Link;