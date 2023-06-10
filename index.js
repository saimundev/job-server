import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv' 
import connectDb from "./models/db.js";
import prodectRouter from "./routes/prodect.js"
import orderRouter from "./routes/order.js"


//INIT APP
const app = express();

//DOTENV CONFIGE
dotenv.config()

//DATABASE CONNECT
connectDb();

//PORT
const port = process.env.PORT || 5050;

//MIDDLEARE
app.use(express.json());
app.use(cors());

//ROUTER
app.use("/api/prodect",prodectRouter);
app.use("/api/order",orderRouter);




//SERVER
app.listen(port,()=>{
    console.log(`server is raning on the port is ${port}`);
})