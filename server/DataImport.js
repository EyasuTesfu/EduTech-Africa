import express from "express";
import User from "./Models/UserModel.js";
import users from "./data/users.js";
import project from "./Models/projectModel.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/project",
  asyncHandler(async (req, res) => {
    await project.remove({});
    const importProject = await project.insertMany(project);
    res.send({ importProject });
  })
);

export default ImportData;
