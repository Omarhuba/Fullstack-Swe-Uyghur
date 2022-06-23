const express = require('express')
const router = express.Router()

const {register} = require('../controllers/auth/registerController')
const {login} = require('../controllers/auth/loginController')



router.post('/register', register)
router.post('/login', login)


module.exports = router