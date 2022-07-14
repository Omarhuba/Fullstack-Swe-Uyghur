const { isValidObjectId } = require("mongoose");
const { User } = require("../models/userModel");
const { ResetToken } = require("../models/resetToken");
const { mailTransport, generatePasswordResetTemplate,plainEmailTemplate } = require("../utils/mail");

const { sendError, createRandomBytes } = require("../utils/helper");

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return sendError(res, "Please provide a valid email!!!");

  const user = await User.findOne({ email });
  if (!user) return sendError(res, "Sorry... user not found!!!!");

  const token = await ResetToken.findOne({ owner: user._id });
  if (token)
    return sendError(res, "Only after One hour you can request token again!!");
  console.log(token);

  const randomBytes = await createRandomBytes();
  const resetToken = new ResetToken({ owner: user._id, token: randomBytes });
  await resetToken.save();

  mailTransport().sendMail({
    from: "security@su.com",
    to: user.email,
    subject: "Password Reset",
    html: generatePasswordResetTemplate(
      `http://localhost:3000/resetPassword?token=${randomBytes}&id=${user._id}`
    ),
  });

  res.json({
    success: true,
    msg: " ResetPassword Link sent to Your Email!!!",
    user: { name: user.name, email: user.email, id: user._id },
  });
};


