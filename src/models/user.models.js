import mongoose from "mongoose";

//se guarda un esquema para que luzca de la siguiente manera
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema); // interactuar la con la db atraves de los objetos
