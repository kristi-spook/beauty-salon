import express from "express";
import {
  createNewClient,
  getAllRegisteredClients,
  deleteClient,
  updateClient,
} from "../controllers/index.js";

const router = express.Router();

router.post("/registry", createNewClient);
router.put("/registry/:id", updateClient);
router.get("/registry", getAllRegisteredClients);
router.delete("/delete/:id", deleteClient);

export default router;
