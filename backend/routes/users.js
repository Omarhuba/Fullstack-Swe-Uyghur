const express = require('express')
const router = express.Router()
const {getUser, updateUser, deleteUser} = require('../controllers/userController')
const { requireAuthAdmin, requireAuthUser } = require('../middleware/auth')
const {userValidator, validate} = require('../middleware/validator')



router.get('/allUser', requireAuthAdmin,  getUser)
router.patch('/updateUser',userValidator,validate,requireAuthUser, updateUser)
router.delete('/deleteUser', requireAuthAdmin, deleteUser)


module.exports = router