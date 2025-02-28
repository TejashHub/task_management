import express from "express";
import {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
  getTask,
  deleteAllTask,
} from "../controllers/tasks.controller.js";

const router = express.Router();

// tasks routers
router.get("/", getAllTask);
router.post("/", createTask);
router.delete("/", deleteAllTask);

router.get("/get/:id", getTask);
router.patch("/edit/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;
