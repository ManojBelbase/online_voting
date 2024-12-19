import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import db from "./config/db.js";
import userRouter from "./routes/user.route.js";
import candidateRouter from "./routes/candidate.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/candidate", candidateRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
