
import { yarg } from "./config/plugins/yargs.plugin"
import { ServerApp } from "./presentation/server-app";



//este se ejecuta automaticamente, porque es una funcion auto invocada

(async() => {
    await main()
    console.log('Ejecutado')
})();

async function main() {
    console.log(yarg)
    const {b:base ,l:limit, s:showTable , n:fileName,d:fileDestination} = yarg;

    ServerApp.run({base, limit, showTable,fileName,fileDestination})
}
