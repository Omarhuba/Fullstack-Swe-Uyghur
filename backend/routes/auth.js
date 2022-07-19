const express = require('express')
const router = express.Router()

const {userValidator, validate} = require('../middleware/validator')
const { requireAuthUser, requireAuthAdmin} = require('../middleware/auth')
const {register} = require('../controllers/auth/registerController')
const {login} = require('../controllers/auth/loginController')
const {verifyEmail} = require('../controllers/verifiedEmail')
const {forgotPassword} = require('../controllers/forgotPassword')
const {resetPassword} = require('../controllers/resetPassword')
const { isResetTokenValid } = require('../middleware/user');






router.post('/register',userValidator,validate, register)
router.post('/login', login)
router.post('/verify', verifyEmail)
router.post('/forgotPassword', forgotPassword)
router.post('/resetPassword', isResetTokenValid, resetPassword)


module.exports = router