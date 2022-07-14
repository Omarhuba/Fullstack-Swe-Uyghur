const { isValidObjectId } = require("mongoose");
const { User } = require("../models/userModel");
const { Token } = require("../models/verificationToken");
const { sendError } = require("../utils/helper");
const { generateOTP, mailTransport } = require("../utils/mail");

exports.verifyEmail = async (req, res) => {
    const { userId, otp } = req.body;
    if (!userId || !otp.trim())
      return sendError(res, "Invalid user id, missing parameters!!!");

    if (!isValidObjectId(userId)) return sendError(res, "invalid user id!!!");

    const user = await User.findById(userId);
    if (!user) return sendError(res, "Sorry... user not found!!!!");

    if (user.verified) return sendError(res, "This account already verified!!!!");

    const token = await Token.findOne({ owner: user._id });
    if (!token) return sendError(res, "Sorry  user not found!!!");

    const isMatched = await token.compareToken(otp);
    if (!isMatched) return sendError(res, "please provide a valid token!!!");

    user.verified = true;

    await Token.findByIdAndDelete(token._id);
    await user.save();

    mailTransport().sendMail({
      from: "emailverification@su.com",
      to: user.email,
      subject: "Verify your email account!",
    })

    res.json({success: true, msg: 'your email is verified!!!',
    user:{name: user.name, email: user.email, id: user._id}})
  };


  exports.hello = (req, res) =>{
    res.send('hello world')
  }