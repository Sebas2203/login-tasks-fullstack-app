import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

//creacion de rutas
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

//rutas protegidas (si quiero proteger una ruta se usa "authRequired")
router.get("/profile", authRequired, profile);

export default router;
