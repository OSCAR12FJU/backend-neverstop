import jwt from 'jsonwebtoken';

const SECRET_KEY = 'mi_secrreto_super';

export const createToken =  {
    generateToken: (payload) =>{
        return jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});
    },
    verifyToken: (token) =>{
        try{
            return jwt.verify(token, SECRET_KEY);
        }catch(error){
            throw new Error('Token invalido', error);
        }
    }
};