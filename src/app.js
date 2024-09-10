import express from "express";
import morgan from "morgan"; // para las peticiones

const app = express();

app.use(morgan("dev"));

export default app;
