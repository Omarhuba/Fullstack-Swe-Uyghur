const { isValidObjectId } = require("mongoose");
const { User } = require("../models/userModel");
const { Token } = require("../models/verificationToken");
const { ResetToken } = require("../models/resetToken");
const { sendError, createRandomBytes } = require("../utils/helper");
const crypto = require('crypto')





const getUser = async (req, res) => {
  try {
    const allUser = await User.find({}).exec();
    const { role } = req.query;
    console.log(req.query);
    if (role) {
      const getByRole = allUser.filter((user) => user.role == role);
      res.json(getByRole);
    } else {
      res.json(allUser);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const data = Object.keys(req.body);
    const {_id} = req.user;
    const user = await User.findById({ _id }).select("-password");
    // console.log(req.body);

    const allUsers = await User.find({}).exec();
    const emailExist = allUsers.some((user) => user.email === req.body.email);
    if (emailExist) return sendError(res, "Email already exist!!!!");

    data.forEach((key) => {
      if (key && key !== "role") {
        user[key] = req.body[key];
      }
    });
    await user.save();
    res.json("User info updated!");
  } catch (error) {
    res.status(400).json(error.message);
  }
};
// updateUser();

const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    await User.deleteOne({ email });
    res.json("User Deleted!!!");
  } catch (err) {
    res.status(400).json(err.message);
  }
};



const forgotPassword = async (req,res) =>{
  const { email } = req.body
  if(!email) return sendError(res, 'Please provide a valid email!!!')

  const user = await User.findOne({email})
  if(!user) return sendError(res, 'User not found, invalid credential!!');

  const token = await ResetToken.findOne({owner: user_id});
  if(token) return sendError(res, 'Only after One hour you can request token again!!')


  const randomBytes = await createRandomBytes()
  const resetToken = new ResetToken({owner: user_id, token })
  await resetToken.save()

}


module.exports = { getUser, updateUser, deleteUser };

// console.log('adadadadasd');
