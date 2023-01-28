import SurveyService from "../services/survey.service.js";

export default class SurveyController{

    static async getAllSurveys(req, res, next){
        try{
            const data = await SurveyService.getAllSurveys();
            res.json({
                success : true,
                data
            }); 
        }
        catch(err){
            next(err);
        }  
    }

    static async createSurvey(req, res, next){
        try{
            const { surveyQuestions } = req.body;
            const userId = req.userId;
            const data = await SurveyService.createSurvey({ surveyQuestions, userId });
            res.json({
                success : true,
                data
            });
        }
        catch(err){
            next(err);
        }
    }

    static async submitSurvey(req, res, next){
        const { surveyId , surveyResponses } = req.body;
        const userId = req.userId;
        const data =  await SurveyService.submitSurvey({ surveyId, surveyResponses, userId });
        res.json({
            success : true,
            data
        });
    }

    static async getResultsSurvey(req, res, next){
        const { surveyId } = req.query;
        const data = await SurveyService.getResultsSurvey({ surveyId });
        res.json({
            success : true,
            data
        });
    }
}