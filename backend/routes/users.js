const express = require('express')
const router = express.Router()
const {getUser} = require('../controllers/userController')


router.get('/getalluser', getUser)



module.exports = router