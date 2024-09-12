import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

//solo son para usuarios autenticados
router.get("/tasks", authRequired, (req, res) => res.send("tasks"));
export default router;
