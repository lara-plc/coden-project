// src/nodemailer.util.ts
import { createTransport } from 'nodemailer'
import { IContactRequest } from '../contact.interface';
import 'dotenv/config'
import { AppError } from '../errors/AppError';

const sendEmail = async({name,email,phone,subject,description}: IContactRequest): Promise<any> => {

    //Organização do conteúdo do contato
    const message = `
    <p>Client: ${name}<br>
    Email: ${email}<br>
    Phone: ${phone}<br>
    ${description}</p>
    `

    //Fazendo a conexão com o servidor SMPT
    const transporter = createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    //Criação do método sendMail
    //O método fará o envio do email de acordo com os parâmetros passados
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CRM_EMAIL,
        subject: subject,
        html: message
    }).then(() => {
        console.log('Message sent with success')
    }).catch((err) => {
        console.log(err)
        throw new AppError('Error sending message, try again later', 400)
    })
}

export { sendEmail }

  