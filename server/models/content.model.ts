import mongoose from "mongoose";

const contentTypes = ['image', 'video', 'article', 'audio'];

const contentSchema = new mongoose.Schema( {
    link : {
        type : String,
        require : true,
    },

    title : {
        type : String,
        require : true,
    },

    useId : { 
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
       type : mongoose.Schema.Types.Array,
       ref : 'Tags'
    }]

})

const Content = mongoose.model('Content', contentSchema);

export default Content;