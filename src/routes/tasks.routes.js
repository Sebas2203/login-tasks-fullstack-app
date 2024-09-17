import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  createTasks,
  getTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

//solo son para usuarios autenticados
router.get("/tasks", authRequired, getTasks);

router.post("/tasks", authRequired, createTasks);

router.get("/tasks/:id", authRequired, getTask);

router.delete("/tasks/:id", authRequired, deleteTask);

router.put("/tasks/:id", authRequired, updateTask);

export default router;
