const express = require('express')
const router = express.Router()
const {getUser, updateUser, deleteUser} = require('../controllers/userController')
const { requireAuthAdmin, requireAuthUser } = require('../middleware/auth')



router.get('/allUser', requireAuthAdmin,  getUser)
router.patch('/updateUser',  updateUser)
router.delete('/deleteUser', requireAuthAdmin, deleteUser)


module.exports = router