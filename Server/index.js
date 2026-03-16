import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import billRoutes from "./routes/billRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bill", billRoutes);

console.log("ENV KEY:", process.env.OPENAI_API_KEY);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});