import express from "express";
import morgan from "morgan"; // para las peticiones
import cookieParser from "cookie-parser";

//rutas
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

//convertir la cookie a un objeto json
app.use(cookieParser());

//rutas
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
