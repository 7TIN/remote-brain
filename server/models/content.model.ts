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
        type : Object,
        require : true,
    }

})

const Content = mongoose.model('Content', contentSchema);

export default Content;