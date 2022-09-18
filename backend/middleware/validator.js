const { check, validationResult } = require("express-validator");
exports.userValidator = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is missing!!!")
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be 3 to 20 characters long!!!"),

    check("email").normalizeEmail().isEmail().withMessage("Email is invalid!!!"),
    check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!!!")
    .isLength({ min: 5, max: 20 })
    .withMessage("Password must be 5 to 20 characters long!!!"),
    // check("address")
    //   // .trim()
    //   .not()
    //   .isEmpty()
    //   .withMessage("Address is missing!!!")
];

exports.validate = (req, res, next)=>{
  const error = validationResult(req).array()
  if(!error.length) return next()

  res.status(400).json({success: false, error: error[0].msg})
}



// module.exports = {userValidator}
