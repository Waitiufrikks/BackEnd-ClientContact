import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./error";
import { contactRoutes } from "./routes/contact.routes";


const app = express();
app.use(express.json());
app.use("/contacts", contactRoutes);
app.use(errorHandler);
export default app;