const {v4:uuidv4} = require('uuid')

const getNewUUID = ()=>{
    return uuidv4()
}

module.exports = {
    getNewUUID
}
