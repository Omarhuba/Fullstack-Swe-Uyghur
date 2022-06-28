const { isValidObjectId } = require("mongoose");
const { User } = require("../models/userModel");
const { Token } = require("../models/verificationToken");
const { sendError } = require("../utils/helper");

const getUser = async (req, res) => {
  try {
    const allUser = await User.find({}).exec();
    const { role } = req.query;
    if (role) {
      const getByRole = allUser.filter((user) => user.role == role);
      res.json(getByRole);
      // console.log(getByRole + "gefasfasdasd");
    } else {
      res.json(allUser);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateUser = async(req, res) => {
  try{
    const user = await User.findById({_id}).select('-password')
    const data = Object.keys(req.body)
    const _id = req.user._id
    console.log(req.user);

    const allUsers = await User.find({}).exec()
    const emailExist = allUsers.some((user => user.email === req.body.email))
    if(emailExist) return sendError(res, 'Email already exist!!!!')

    data.forEach((key) =>{
      if(key && key !== 'role'){
        user[key] = req.body[key]
      }
    })
    await user.save()
  }catch(err){
    res.status(400).json(err.message)
  }
}


const deleteUser = async(req, res)=>{
  try{
    const {email} = req.body
    await User.deleteOne({email})
    res.json('User Deleted!!!')
  }catch(err){
    res.status(400).json(err.message)
  }
}



module.exports = { getUser, updateUser, deleteUser };

