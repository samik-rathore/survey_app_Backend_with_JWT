import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username : { type : String, required : true },
    password : { type : String, required : true },
},
{
    timestamps : true,
    collection : "Users"
});

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;