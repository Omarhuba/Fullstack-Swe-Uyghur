const express = require('express')
const  {sweuyghurDB}  = require('./database/connection')
require('dotenv').config()
const routes = require('./routes')



const app = express()



app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(morgan('dev'))

app.use('/api', routes.auth)


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    sweuyghurDB()
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});