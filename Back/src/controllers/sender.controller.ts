import { Request, Response } from "express";
import { IContactRequest } from '../contact.interface'
import { sendEmail } from '../services/nodemailer.util'

export const contactSenderController = async (req: Request, res: Response) => {
    try {
        const {name,email,phone,subject,description}: IContactRequest = req.body
        
        await sendEmail({name,email,phone,subject,description})
        return res
        .status(200)
        .send({  message: 'Email sent with success!' })
        
    } catch (error) {
        if(error instanceof Error){
            return res
            .status(400)
            .json({
                message: error.message
            })
        }
    }
};
