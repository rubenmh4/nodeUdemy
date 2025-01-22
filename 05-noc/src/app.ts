import { Server } from './presentation/server';


//funcion autoinvocada, (se ejecuta siempre)
(async()=>{
    main()
})()


function main (){
    Server.start()
}