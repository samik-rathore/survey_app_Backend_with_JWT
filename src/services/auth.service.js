import UserModel from "../models/User.js";

export default class AuthService{

    static async login( { username, password }){
        const user = await UserModel.findOne({ 
            $and : [
                { username : username },
                { password : password }
            ]
         }).lean().exec();
        if(!user){
            const newUser = new UserModel({
                username : username,
                password : password 
            });
            await newUser.save();
            return newUser.toJSON();
        }else{
            return user;
        } 
    }
}