import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({
    userId : { type : mongoose.Schema.Types.ObjectId, required : true, ref : "Users" },
    surveyId : { type : mongoose.Schema.Types.ObjectId, required : true, ref : "Surveys" },
    surveyResponses : [{
        question : { type : String, required : true},
        response : { type : Boolean, required : true}
    }]
},
{
    timestamps : true,
    collection : "Responses"
});

const ResponseModel = mongoose.model("ResponseModel", ResponseSchema);

export default ResponseModel;