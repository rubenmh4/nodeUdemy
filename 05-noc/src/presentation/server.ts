import {  EmailService } from './email/email.service';

import { envs } from "../config/plugins/envs.plugins"
import { CheckService } from "../domain/use-cases/checks/check-service"
import { FileSystemDatasouce } from "../infrastructure/datasources/file-system.datasource"
import { LogRepositoryImpl } from "../infrastructure/repository/log.repository"
import { CronService } from "./cron/cron-service"


//aqui creamos las instancias de las implementaciones

const fileSystemRepository = new LogRepositoryImpl(
    new FileSystemDatasouce()
)


export class Server {

    public static start(){
        console.log('Server started..')

        //mandar email
        const emailService = new EmailService()

        emailService.sendEmail({
            to:'r.moronhinojosa@gmail.com',
            subject:'Logs de sistemas',
            htmlBody:`
                <h3>Logs sistema</h3>
                <p>Prueba de envio de email</p>
            `
        })

       // CronService.createJob('*/5 * * * * *',()=>{
       /*     
            new CheckService(fileSystemRepository,()=>console.log('success'),(e)=>console.log(e)).execute('https://google.com')
    
        })*/
    }
}