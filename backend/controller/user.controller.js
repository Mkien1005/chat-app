import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const users = await User.find({ _id: { $ne: userId } }); //lấy tất cả users trử bản thân
    res.status(200).json({ users });
  } catch (error) {
    console.log("Error from getUsersForSidebar: " + error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
