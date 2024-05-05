import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, //prevent XSS attacks cross-site scripting attack
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //CSRF attacks cross-site forgery attack
    maxAge: 1000 * 60 * 60 * 24 * 15,
  });
};

export default generateTokenAndSetCookie;
