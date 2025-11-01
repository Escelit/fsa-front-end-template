import express from "express";
import { userModel } from "../models/user.model";

// export const router = express.Router();

// router.get("/hello", (req, res) => {
//   res.status(200).json({ msg: "Express is running" });
// });

export const helloRoute = {
  path: "/hello",
  method: "get",
  handler: async (req, res) => {
    const user = await userModel.find();
    res.status(200).json(user);
  },
};
