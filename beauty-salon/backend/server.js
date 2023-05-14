import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mongoConnector } from "./db/mongoConector.js";
import router from "./routes/index.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

mongoConnector();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`app listens on ${PORT}`));
