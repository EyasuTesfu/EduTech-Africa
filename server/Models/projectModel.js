import mongoose from "mongoose";



const messageSchema=mongoose.Schema({

    name:{
        type:String,
        require:true,
    },
    comment:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    }
})
const projectSchema=mongoose.Schema({

    name:{
        type:String,
        reuqire:true
    },
    image:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    messags:[messageSchema],


},
{
    timestamps:true

})

const project= mongoose.model("project",projectSchema)
export default project