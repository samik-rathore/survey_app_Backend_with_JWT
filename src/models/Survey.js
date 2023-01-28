import mongoose from "mongoose";

const SurveySchema = new mongoose.Schema({
    userId : { type : mongoose.Schema.Types.ObjectId, required : true, ref : "Users" },
    surveyQuestions : [String]
},
{
    timestamps : true,
    collection : "Surveys"
});

const SurveyModel = mongoose.model("SurveyModel", SurveySchema);

export default SurveyModel;