import express from "express";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("frontend"));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});