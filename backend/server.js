import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 8000

dotenv.config()

app.use(express.json())
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
app.use("/api/auth", authRoutes)

app.listen(PORT, () => connectToMongoDB()); 