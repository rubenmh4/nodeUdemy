 
const buildLogger = require('./public/logger.plugin')

const logger = buildLogger('app.js')

logger.log('Hola mundo')
logger.error('Eato es un error')
