import fs from 'fs'
import { yarg } from './config/plugins/yargs.plugin'


const {b:base,l:limit,s:showTable} = yarg

let outputMessage = '';

for (let index = 0; index <= 10 ; index++) {
    outputMessage += `${base} x ${index} = ${base * index}`
}
if(showTable){
    console.log(outputMessage)
}
const outputPath = 'outputs'
