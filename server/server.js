import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import ImportData from "./DataImport.js";
dotenv.config();
const app = express();

app.use(express.json());

try {
  mongoose
    .connect(
      "mongodb+srv://book:IhkVzXYiU7iNzCDu@shoeshop.hywvb8u.mongodb.net/bookDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(() => {
      console.log("Database Connected");
    });
} catch (error) {
  console.log("Error connecting to Database");
}

import projectRoute from "./Routes/projectRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRoute from "./Routes/UserRoutes.js";

app.use("/api/import", ImportData);
app.use("/api/products", projectRoute);
app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is Running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server run in port ${PORT}`));
