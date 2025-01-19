const fs = require('fs')

const content = fs.readFileSync('readme.md','utf8');
const wordCount = content.split(' ')
const wordCountReact = content.match(/react/gi)

console.log('Palabras:',wordCount.length)
console.log('Palabras react:',wordCountReact.length)

