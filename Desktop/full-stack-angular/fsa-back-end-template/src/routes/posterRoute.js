import { userModel } from "../models/user.model";

export const posterRoute = {
  path: "/users",
  method: "post",
  handler: async (req, res) => {
    const body = req.body;
    const createdUser = await userModel.create({ ...body });
    res.json(createdUser);
  },
};
