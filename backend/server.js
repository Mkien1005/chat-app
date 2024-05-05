import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectMongo.js";
const app = express();
//.env
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// Get the port from environment variable or use 3000 as default
const port = process.env.PORT || 5000;

// Start listening on provided port, or 3000 if not specified
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on http://localhost:${port}`);
});
