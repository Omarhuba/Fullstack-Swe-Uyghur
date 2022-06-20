const express = require('express')
// const  {sweuyghurDB}  = require('./database/connection')
// const { sweuyghurDB } = require('./models/userModel')
require('dotenv').config()
// const routes = require('./routes')



const app = express()



app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(morgan('dev'))




const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    // sweuyghurDB()
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});