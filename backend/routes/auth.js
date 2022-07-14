const express = require('express')
const router = express.Router()

const {userValidator, validate} = require('../middleware/validator')
const { requireAuthAdmin, requireAuthUser } = require("../middleware/auth");

const {register} = require('../controllers/auth/registerController')
const {login} = require('../controllers/auth/loginController')
const {verifyEmail} = require('../controllers/verifiedEmail')
const {forgotPassword} = require('../controllers/forgotPassword')
const {resetPassword} = require('../controllers/resetPassword')
const { isResetTokenValid } = require('../middleware/user');


const {hello} = require('../controllers/verifiedEmail');




router.post('/register',userValidator,validate,requireAuthUser, register)
router.post('/login', login)
router.post('/verify', verifyEmail)
router.post('/forgotPassword', forgotPassword)
router.post('/resetPassword', isResetTokenValid, resetPassword)
router.get('/hello', hello)


module.exports = router