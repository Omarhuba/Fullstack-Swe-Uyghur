const mongoose = require('mongoose')
require('dotenv').config()
const {DATABASE_URI} = process.env

 const sweuyghurDB = async ()=> {
    try{
        await mongoose.connect(`${DATABASE_URI}`)
        console.log('CONNECTED TO THE DB....')
    }catch(error){
        console.log('Failed to connect to MongoDB', error)
    }
}

module.exports = {sweuyghurDB};

