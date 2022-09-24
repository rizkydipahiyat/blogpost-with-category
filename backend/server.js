import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import CategoryRoute from "./routes/CategoryRoute.js";
import PostRoute from "./routes/PostRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(CategoryRoute);
app.use(PostRoute);

const PORT = process.env.PORT_URL || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
