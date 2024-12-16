import { authenticateUser } from "../../service/authenticateUser.js";

export const authController = {
    login: async(req, res) =>{
        try{
            const {email, password} = req.body;
            const token = await authenticateUser(email, password);
            res.json({
                success: true,
                token: token,
            })
        } catch(error){
            res.status(401).json({
                success: false,
                message: error.message,
            })
        }

    }
}