const { isValidObjectId } = require("mongoose");
const { User } = require("../models/userModel");
const { Token } = require("../models/verificationToken");
const { SendError } = require("../utils/helper");

const getUser = async (req, res) => {
  try {
    const allUser = await User.find({}).exec();
    const { role } = req.query;
    if (role) {
      const getByRole = allUser.filter((user) => user.role == role);
      res.json(getByRole);
      console.log(getByRole + "gefasfasdasd");
    } else {
      res.json(allUser);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getUser };

