const express = require('express')
const router = express.Router()

const {userValidator, validate} = require('../middleware/validator')


const {register} = require('../controllers/auth/registerController')
const {login} = require('../controllers/auth/loginController')
const {verifyEmail} = require('../controllers/verifiedEmail')



router.post('/register',userValidator,validate, register)
router.post('/verify', verifyEmail)
router.post('/login', login)


module.exports = router