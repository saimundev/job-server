import express from "express"
import cors from "cors"
import * as dotenv from 'dotenv'
import dbConnect from "./models/db.js";
import userRouter from "./routes/userRoute.js";


//init app
const app = express();

//dot env config
dotenv.config()

//database connection
dbConnect();

//port
const port = process.env.PORT || 5050;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth",userRouter)




//create server
app.listen(port,()=>{
    console.log("server is runing on the port is 5050")
})