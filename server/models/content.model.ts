import mongoose from "mongoose";

const contentTypes = ["document", "tweet", "link", "youtube"];

const contentSchema = new mongoose.Schema( {
    link : {
        type : String,
        require : true,
    },

    title : {
        type : String,
        require : true,
    },

    userId : { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        require : true,
    },

    type : {
        type : String,
        enum : contentTypes,
        require : true,
    },

    tags : [{
       type : mongoose.Schema.Types.ObjectId,
       ref : 'Tags'
    }]

})

const Content = mongoose.model('Content', contentSchema);

export default Content;