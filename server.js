import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDb from "./config/db.js"
import cors from "cors";

dotenv.config();

connectDb();

const app= express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


// routes
import testRoute from "./routes/testRoute.js"

app.use('/api/v1',testRoute);


app.get('/',(req,res)=>{
    return res.status(200).send("<h1> Welcome to node server </h1>")
})

//port 
const PORT = process.env.PORT || 8080


//listener
app.listen(PORT,()=>{
    console.log(`server is running ${process.env.PORT} on port ${process.env.NODE_ENV}`)
})