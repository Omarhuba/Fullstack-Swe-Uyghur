const express = require('express')
const  {sweuyghurDB}  = require('./database')
// require('./database/index')
require('dotenv').config()
const routes = require('./routes')
const morgan = require('morgan')




const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))



// app.get('/api/login', (req,res)=>{
//   res.send('hello')
// })



app.use('/api', routes.auth)
app.use('/api', routes.users)


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    sweuyghurDB()
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});