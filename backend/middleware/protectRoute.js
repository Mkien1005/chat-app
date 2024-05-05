import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";
dotenv.config();
const protectRoute = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized - No Token Provided" });
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  if (!decode) {
    return res.status(401).json({ error: "Unauthorized - Invalid Token" });
  }
  const user = await User.findById(decode.userId);
  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }
  req.user = user;
  next();
};
export default protectRoute;
