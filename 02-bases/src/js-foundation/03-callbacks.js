const user = [{
    id:1,
    name:'John Doe'
},
{
    id:2,
    name:'Jess'
}]

function getUserById (id,callback) {
    return user.find(user => user.id == id)
}

module.exports ={
    getUserById
}