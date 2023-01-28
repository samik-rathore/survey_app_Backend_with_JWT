import jwt from 'jsonwebtoken';

export default class JWTUtils{

    static async generateToken(payload){
        const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }

    static async verifyToken(token){
        const payload = await jwt.verify(token, process.env.JWT_SECRET);
        return payload;
    }
}