import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
    execute (url : string) : Promise<boolean>
}


type SuccesCallback = () => void;
type ErrorCallback = (error: string) => void;




//tenemos un servicio que comprueba la url cada cierto tiempo si no response lanza error
export class CheckService implements CheckServiceUseCase{

    constructor(
        private readonly logRepository : LogRepository,
        private readonly successCallback : SuccesCallback,
        private readonly errorCallback : ErrorCallback
    ){

    }

    public async execute (url: string ) : Promise<boolean> {

        try {
            const  req = await fetch ( url)
            if(!req.ok){
                throw new Error(`Error on check service ${url}`)
            }
            const log = new LogEntity({message:`Service ${url} working`,level:LogSeverityLevel.low,origin:'check-server.ts'})
            this.logRepository.saveLog(log)
            this.successCallback()
            return true
        } catch (error) {
            const log = new LogEntity({message:`Service ${url} not working`,level:LogSeverityLevel.high,origin:'check-service.ts'})
            this.logRepository.saveLog(log)
            this.errorCallback(`${error}`)           

            return false
        }
    }
} 