const {v4:uuidv4} = require('uuid')



const buildMakePerson = ({getNewUUID})=>{
   return ({name,birthdate})=>{

        return {
            id:getNewUUID(),
            name:name,
            birthdate:birthdate,
            age:new Date().getFullYear() - new Date(birthdate).getFullYear()
        }
    }
}

module.exports = {
    buildMakePerson
}