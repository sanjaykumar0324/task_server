import mongoose from "mongoose";

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongo db connected ${mongoose.connection.host}`)
    }catch(error){
        console.log(`mongo db error ${error}`)
    }
}
export default  connectDb