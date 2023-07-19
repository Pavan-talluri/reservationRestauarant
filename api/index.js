import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import restaurantsRoute from "./routes/restaurants.js";
import tableRoute from "./routes/table.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();


const connect = async ()=>{
try{
    await mongoose.connect(process.env.MONGO);
    console.log("connect to mongodb");
} catch(error){
    throw error;
 }
};

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/restaurants", restaurantsRoute);
app.use("/api/table", tableRoute);

app.use((err,req,res,next)=> {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message:errorMessage,
        stack: err.stack,
    })
})

app.listen(8800,()=>{
    connect()
    console.log("connected backend")
})