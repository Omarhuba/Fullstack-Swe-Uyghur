const { User } = require("../../models/userModel");
const { Token } = require("../../models/verificationToken");
const jwt = require("jsonwebtoken");
const {
  generateOTP,
  mailTransport,
  generateEmailTemplate,
} = require("../../utils/mail");

const register = async (req, res) => {
  const { name, address, email, password, role } = req.body;
  const userFound = await User.findOne({ email }).exec();
  try {
    if (!userFound) {
      const user = await new User({
        name,
        address,
        email,
        password,
        role,
      });
      // console.log(user);

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

      user.comparePassword(password, async (err, isMatched) => {
        if (err) {
          throw new Error("Something is wrong!");
        } else {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });

          const newUser = await User.findOne({ _id: user._id }).select(
            "-password"
          );

          res.json({ newUser, message: "User created successfully!", token });
        }
      });
    } else {
      throw new Error(" User Already Exist!");
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { register };
