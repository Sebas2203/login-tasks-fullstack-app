import mongoose from "mongoose";

//se guarda un esquema para que luzca de la siguiente manera
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, //en MongoDB el id es un ObjectId
      ref: "User", //referencia a otro modelo(user.models.js)
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema); // interactuar la con la db atraves de los objetos
