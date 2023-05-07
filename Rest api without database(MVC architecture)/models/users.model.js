const {v4:uuidv4} = require('uuid')


//this is a JS object's array
const users =[
    {
        id: uuidv4(),
        username:"riaj hasan",
        email:"pranto318@gmil.com"
    },
    {
        id: uuidv4(),
        username:"Amir hasan",
        email:"amir318@gmil.com"
    },
    {
        id: uuidv4(),
        username:"Mahmud hasan",
        email:"rakib318@gmil.com"
    },
    {
        id: uuidv4(),
        username:"sajjad",
        email:"sajjad567@gmil.com"
    }
]

module.exports = users;