import { Response } from "express";
import jwt from 'jsonwebtoken';
class UserAccessAnswer {
    public static async process(register: any, res: Response): Promise<any> {
        if (register != null) {
            console.log(register);
            ///vamos a crear el token
            const miToken = jwt.sign({ Name: register.nameUser,LastName:register.lastnameUser,role:register.nameRol, dosDev: 'eso somos' }, 'LaClaveVaAqui', { expiresIn: '8h' });
            return res.status(200).json({ miToken: miToken });
        } else {
            return res.status(401).json({ mensaje: 'Usuario incorrecto o contraseña incorrecta' });
        }
    }

}
export default UserAccessAnswer;