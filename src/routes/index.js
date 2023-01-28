import express from "express";
import authRouter from "./auth.routes.js";
import surveyRoutes from "./survey.routes.js";

const apiRouter = express.Router();

apiRouter.use("/auth" , authRouter);
apiRouter.use("/survey" , surveyRoutes)

export default apiRouter;