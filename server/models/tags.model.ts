import mongoose from "mongoose";


const tagsSchema = new mongoose.Schema({

    title : {
        type : String,
        require : true,
        unique : true,
    }
})

const Tags = mongoose.model('Tags', tagsSchema);

export default Tags;