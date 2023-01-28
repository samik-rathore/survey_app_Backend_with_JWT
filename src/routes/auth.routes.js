import express from "express";
import AuthController from "../controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/login", AuthController.login );

export default authRouter;