const { isValidObjectId } = require("mongoose");
const { User } = require("../models/userModel");
const { ResetToken } = require("../models/resetToken");
const { sendError } = require("../utils/helper");




exports.isResetTokenValid = async (req, res, next) => {
  const { token, id } = req.query;
  console.log('hello query' + req.query.id, req.query.token);
  if (!token || !id) return sendError(res, "Invalid Request!!!");

  if (!isValidObjectId(id)) return sendError(res, "Invalid user!");

  const user = await User.findById(id);
  if (!user) return sendError(res, "user not found!");

  const resetToken = await ResetToken.findOne({ owner: user._id });
  if (!resetToken) return sendError(res, "resetToken not found!");

  const isValid = await resetToken.compareToken(token);
  if (!isValid) return sendError(res, "ResetToken is not valid!");

  req.user = user;
  next();
};
