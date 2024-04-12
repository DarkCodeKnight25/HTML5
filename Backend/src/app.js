import express from "express";
import morgan from "morgan";

// Routes
import languageRoutes from "./routes/language.routes";

const app = express();

// Setting
app.set("port", 4000);

// Middelwares
app.use(morgan("dev"));
app.use(express.json());

// Routas
app.use("/api/languages", languageRoutes);

export default app;