const { isValidObjectId } = require("mongoose");
const { User } = require("../models/userModel");
const { ResetToken } = require("../models/resetToken");
const { mailTransport,plainEmailTemplate } = require("../utils/mail");

const { sendError } = require("../utils/helper");




exports.resetPassword = async (req, res)=>{
    const {password} = req.body
    console.log(password);

    const user = await User.findById(req.user._id)
    console.log(req.user._id);
    if(!user) return sendError(res, 'User not found!')

    const isSamePassword = await user.comparePassword(password)
    console.log(isSamePassword);
    if(isSamePassword) return sendError(res, 'New password must be different!!')


    if(password.trim().length < 5 || password.trim().length > 20)
     return sendError(res, 'Password must be 5 to 20 characters long!')
    user.password = password.trim()
    // console.log(user.password);
    await user.save()

    await ResetToken.findOneAndDelete({owner: user._id})

    mailTransport().sendMail({
        from: "security@su.com",
        to: user.email,
        subject: "Password Reset Successfuly!",
        html: plainEmailTemplate('Password Reset Successfully','Now you can login with new password!')
      });

      res.json({
        success: true,
        msg: " ResetPassword Successfully!!!"
      });

}