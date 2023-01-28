import AuthService from "../services/auth.service.js";
import JWTUtils from "../utils/jwtUtils.js";

export default class AuthController{
    static async login(req, res, next) {
        try{
            const { username, password } = req.body;
            const user = await AuthService.login({ username, password });
            const token = await JWTUtils.generateToken({ userId : user._id });
            res.json({
                success : true,
                data : token
            })
        }
        catch(err){
            next(err);
        }
    }
}