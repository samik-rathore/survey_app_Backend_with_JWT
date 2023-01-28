import express from "express";
import SurveyController from "../controllers/survey.controllers.js";
import Auth from "../middleware/Auth.js";

const surveyRoutes = express.Router();

surveyRoutes.get("/" , Auth.ensureAuthenticated, SurveyController.getAllSurveys);
surveyRoutes.post("/create" , Auth.ensureAuthenticated, SurveyController.createSurvey);
surveyRoutes.post("/submit" , Auth.ensureAuthenticated, SurveyController.submitSurvey);
surveyRoutes.get("/results" , Auth.ensureAuthenticated, SurveyController.getResultsSurvey);

export default surveyRoutes;