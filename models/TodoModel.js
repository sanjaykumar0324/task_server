import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title :{
        type : String,
        required :[true,"Title is required"]
        
    },
    task :{
        type: String,
        required : [true,"Task field is required"]
    }
},{timestamps :true})
export const TodoModel = mongoose.model("todos",TodoSchema)
export default TodoModel;