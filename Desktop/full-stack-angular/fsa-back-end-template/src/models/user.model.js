import { userSchema } from "../schemas/user.schema";
import mongoose from "mongoose";

export const userModel = mongoose.model("users", userSchema);
