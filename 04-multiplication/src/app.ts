const fs = require('fs')


let message :string = ''



for (let index = 1; index < 10; index++) {
    message += `5 x ${index} = ${5*index} \n`
    
}
console.log(message)
fs.writeFileSync('tabla5.txt',message)