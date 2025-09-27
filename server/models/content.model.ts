import mongoose from "mongoose";


const contentSchema = new mongoose.Schema( {
    link : {
        type : String,
        require : false,
    },

    title : {
        type : String,
        require : true,
    },

    useId : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    type : {
        type : String,
        require : true,
    },

    tags : {
       type : mongoose.Schema.Types.Array,
       ref : 'Tags'
    }




})

const Content = mongoose.model('Content', contentSchema);

export default Content;