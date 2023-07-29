import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from 'cors';
import { errorHandler } from "./error";
import { contactRoutes } from "./routes/contact.routes";
import { clientRoutes } from "./routes/client.routes";
import { loginRoutes } from "./routes/login.routes";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/login",loginRoutes)
app.use("/clients", clientRoutes);
app.use("/contacts", contactRoutes);
app.use(errorHandler);
export default app;