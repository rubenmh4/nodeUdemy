import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugins';

interface SendMailOptions {
    to: string;
    subject: string;
    htmlBody: string;
    //todo:attachements
}



export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }

    })
    
    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody } = options

        try {
            console.log(this.transporter)
            const sentInformation = await this.transporter.sendMail({
                to:to,
                subject:subject,
                html:htmlBody
            })

            console.log(sentInformation)


            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }


}