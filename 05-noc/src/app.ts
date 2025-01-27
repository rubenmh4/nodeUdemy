import { envs } from './config/plugins/envs.plugins';
import { Server } from './presentation/server';
import 'dotenv/config'

//funcion autoinvocada, (se ejecuta siempre)
(async()=>{
    main()
})()


function main (){
    Server.start()
    //console.log(envs.PORT)
}