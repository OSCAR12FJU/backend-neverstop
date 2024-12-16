import { userRepository } from "../infraestructure/repositories/userRepository.js"
import { createToken } from "../infraestructure/utils/createToken.js";

export const authenticateUser = async (email, password) =>{
  const user = await userRepository.findByEmail(email);
  if(!user){
    throw new Error("Usuario no encontrado");
  }

  const isPasswordValid = user.password === password;
  if (!isPasswordValid){
    throw new Error("Contraseña incorrecta");
  }

  const token = createToken.generateToken({
    id: user.id, email: user.email
  });

  return token;
}