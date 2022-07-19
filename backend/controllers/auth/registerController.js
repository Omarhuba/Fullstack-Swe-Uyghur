const { User } = require("../../models/userModel");
const { Token } = require("../../models/verificationToken");
const jwt = require("jsonwebtoken");
const {
  generateOTP,
  mailTransport,
  generateEmailTemplate,
} = require("../../utils/mail");
const { sendError } = require("../../utils/helper");

const register = async (req, res) => {
  const { name, address, email, password, role } = req.body;
  const userFound = await User.findOne({email})
  if(userFound) return sendError(res, 'User already exists!')

  const user = new User({name, address, email, password, role })

  const OTP = generateOTP();
  const verificationToken = new Token({
    owner: user._id,
    token: OTP,
  });

  await verificationToken.save();
  await user.save();

  mailTransport().sendMail({
    from: "emailverification@su.com",
    to: user.email,
    subject: "Verify your email account!",
    html: generateEmailTemplate(OTP),
  });

  await user.save()

  res.status(200)
  .json({success: true, msg: " User Create Successfully!!!" ,
  user})




  // const userFound = await User.findOne({ email }).exec();
  //   if (!userFound) {
  //     const user = await new User({
  //       name,
  //       address,
  //       email,
  //       password,
  //       role,
  //     });
  //     // console.log(user);



  //     user.comparePassword(password, async (err, isMatched) => {
  //       if (err) {
  //         throw new Error("Something is wrong!");
  //       } else {
  //         const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
  //           expiresIn: "1d",
  //         });

  //         const newUser = await User.findOne({ _id: user._id }).select(
  //           "-password"
  //         );

  //         res.json({ newUser, message: "User created successfully!", token });
  //       }
  //     });
  //   } else {
  //     throw new Error(" User Already Exist!");
  //   }
  //   res.status(400).json(err.message);
};

module.exports = { register };
