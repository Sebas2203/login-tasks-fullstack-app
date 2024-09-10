import User from "../models/user.models.js";
import bcrypt from "bcryptjs"; // para encriptar las passwords
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  // obtener datos
  const { email, password, username } = req.body;

  //guardar el objecto en la db
  try {
    //encriptar la password
    const passwordHash = await bcrypt.hash(password, 10);

    // crear un usuario
    // instanciar un objeto
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    //se guarda el dato
    const userSaved = await newUser.save();

    // token
    // guardar el token
    const token = await createAccessToken({ id: userSaved._id });
    res.cookie("token", token);

    // manda el dato al frontend
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = (req, res) => {
  res.send("login");
};
