import JWTUtils from "../utils/jwtUtils.js";

export default class Auth{

    static async ensureAuthenticated(req, res, next){
        try{
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = await JWTUtils.verifyToken(token);
            req.userId = decodedToken.userId;
            next();
        }
        catch(err){
            next(err);
        }
    }

}