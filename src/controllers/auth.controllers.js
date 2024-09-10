import User from "../models/user.models.js";

export const register = async (req, res) => {
  // obtener datos
  const { email, password, username } = req.body;

  //guardar el objecto en la db
  try {
    // crear un usuario
    // instanciar un objeto
    const newUser = new User({
      username,
      email,
      password,
    });
    // console.log(newUser);

    const userSaved = await newUser.save();

    // manda el dato al frontend
    res.send(userSaved);
  } catch (error) {
    console.log(error);
  }
};
export const login = (req, res) => {
  res.send("login");
};
