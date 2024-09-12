//middleware son funciones que se van a ejecutar antes de que lleguen a una ruta
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  //obtener el token
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "Not Token, authorization denied" });

  //validar el token
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });

    req.user = user;

    next();
  });
};
