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

export const login = async (req, res) => {
  // obtener datos
  const { email, password } = req.body;

  //guardar el objecto en la db
  try {
    //comparar la password
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    // crear el token
    const token = await createAccessToken({ id: userFound._id });
    res.cookie("token", token);

    // manda el dato al frontend
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updateAt: userFound.updateAt,
  });

  console.log(req.user);
  res.send("profile");
};
