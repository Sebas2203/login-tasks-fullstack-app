import { Router } from "express";
import { login, register, logout } from "../controllers/auth.controllers.js";

const router = Router();

//creacion de rutas
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
