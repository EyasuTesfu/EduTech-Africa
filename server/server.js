import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js";
import projectRoute from "./Routes/projectRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRoute from "./Routes/UserRoutes.js";
dotenv.config()
const app =express();
connectDatabase();
app.use(express.json())
app.use("/api/import",ImportData)
app.use("/api/products",projectRoute)
app.use("/api/users",userRoute)

app.use(notFound)
app.use(errorHandler)

app.get("/",(req,res)=>{
    res.send("API is Running...");
})

const PORT=process.env.PORT ||1000;
app.listen(PORT,console.log(`server run in port ${PORT}`));