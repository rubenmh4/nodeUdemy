
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

        CronService.createJob('*/5 * * * * *',()=>{
            
            new CheckService(fileSystemRepository,()=>console.log('success'),(e)=>console.log(e)).execute('https://google.com')

        })
    }
}