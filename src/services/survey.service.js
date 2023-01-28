import SurveyModel from "../models/Survey.js";
import ResponseModel from "../models/Response.js";

export default class SurveyService{

    static async getAllSurveys(){
        return await SurveyModel.find({}).lean().exec();
    }

    static async createSurvey({ surveyQuestions, userId }){
        const survey = new SurveyModel({
            surveyQuestions,
            userId
        });
        await survey.save();
        return survey.toJSON();
    }
    
    static async submitSurvey({ surveyId, surveyResponses, userId }){
        const response = new ResponseModel({
            surveyId,
            userId,
            surveyResponses
        });
        await response.save();
        return response.toJSON();
    }

    static async getResultsSurvey({ surveyId }){
        const responses = await ResponseModel.find({ surveyId }).lean().exec();
        return responses;
    }

}