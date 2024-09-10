import express from "express";
import morgan from "morgan"; // para las peticiones
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRoutes);

export default app;
