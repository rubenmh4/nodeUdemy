import { CronJob } from "cron"

//utilizamos el paquete de cron : se utiliza para programar funciones que se 
//ejecutan cada cierto tiempo

type CronTime = string | Date;
type onTick = ()=> void;

export class CronService {

    static createJob(cronTime :CronTime, onTick: onTick) : CronJob{
        const job = new CronJob(
            cronTime,
            onTick,
        )
        job.start()

        return job;
    }

}