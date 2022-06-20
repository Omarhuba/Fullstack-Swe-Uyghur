const mongoose = require('mongoose')
require('dotenv').config()
// const {DATABASE_URL} = process.env

 const sweuyghurDB = async ()=> {
    try{
        await mongoose.connect("mongodb://localhost:27017/sweuyghur")
        console.log('CONNECTED TO THE DB....')
    }catch(error){
        console.log('Failed to connect to MongoDB', error)
    }
}

module.exports = {sweuyghurDB};

// export const connectDB = async ()=>{
//     try{
//     }catch(err){
//         console.log(err.message);
//     }
// }



// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/testdb")
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch((err) => console.error("Could not connect to MongoDB...", err));



