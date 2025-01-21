
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers'


export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Multiplitacion table base'
    })
    .option('l', {
        alias:'limit',
        type:'number',
        demandOption:true,
        describe:'Multiplitacion table limit'
    })
    .option('s', {
        alias:'showTable',
        type:'boolean',
        demandOption:true,
        describe:'Show table base'
    })
    .option('n', {
        alias:'name',
        type:'string',
        describe:'File name',
        default:'multiplication-table'
    })
    .option('d', {
        alias:'destination',
        type:'string',
        default:'outputs',
        describe:'File destination'
    })
    .check((argv,options)=>{
        return true
    })
    .parseSync()






