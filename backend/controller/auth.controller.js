import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup = async (req, res) => {
  const { fullName, username, password, confirmpw, gender } = req.body;
  if (password !== confirmpw) {
    return res.status(400).json({ error: "Mật khẩu không trùng khớp!" });
  }
  const user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({ error: "Tên tài khoản đã được đăng ký!" });
  }
  const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    fullName,
    username,
    password: hashPassword,
    gender,
    profilePic: gender === "male" ? boyAvatar : girlAvatar,
  });
  newUser
    .save()
    .then(() => {
      generateTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    })
    .catch((error) => {
      console.log("Error in sign up controller: " + error.message);
      res.status(500).json({ error: "Server Eternal Error." });
    });
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res
        .status(400)
        .json({ error: "Tên đăng nhập hoặc mật khẩu không chính xác!" });
    }
    generateTokenAndSetCookie(user._id, res);
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in log in controller: " + error.message);
    res.status(500).json({ error: "Server Eternal Error." });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Log out successfully!" });
  } catch (error) {
    console.log("Error in log out controller: " + error.message);
    res.status(500).json({ error: "Server Eternal Error." });
  }
};
