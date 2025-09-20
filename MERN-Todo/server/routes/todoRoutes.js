



import express from "express";
import { createTask, getTask, updateTask, deleteTask } from "../controllers/todoController.js";

const router = express.Router();

router.post("/new", createTask);
router.get("/get", getTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
