import mongoose from "mongoose";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/chat-app");
    console.log("Connect to mongodb successfully");
  } catch (error) {
    console.log("Error connection:", error);
  }
};
export default connectToMongoDB;
