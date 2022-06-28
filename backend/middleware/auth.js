const { User } = require('../models/userModel')
const { Forbidden, Unauthorized, TokenExpired } = require('../error/index')
const jwt = require('jsonwebtoken');
const { sendError } = require('../utils/helper');



const requireAuthUser = (req, res, next) => {
    if(!req.headers.authrization){
        console.log(req.headers.authrization);
        return sendError(res, 'Please Login First!!!!')
    }
    try{
        const tokenData = jwt.verify(token, process.env.JWT_SECRET)
        const token = req.headers.authrization.replace('Bearer', '')
        const user = await User.findById({_id: tokenData._id}).select('-password')
        req.user = user
    }catch(err){
        const tkError = new TokenExpired()
        const jwtError = new Unauthorized()

        if ( error instanceof jwt.TokenExpiredError){
            res.status(tkError.errorCode).json(tkError.message)
        }else if(error instanceof jwt.JsonWebTokenError) {
            res.status(jwtError.errorCode).josn(jwtError.message)
        }else{
            res.json(error.message)
        }
    }
}


const requireAuthAdmin = async (req, res, next) => {
    if (!req.headers.authorization) {
      console.log(req.headers.authorization);
      return sendError(res, 'Please Login First!!!!')
    }
    try {
      const token = req.headers.authorization.replace("Bearer ", "");
      const tokenData = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById({ _id: tokenData._id });
      console.log(user.role);

      if (user.role != "admin") {
        throw new Forbidden();
      }
      req.user = user;

      next();
    } catch (error) {
      const tkError = new TokenExpired();
      const jwtError = new Unauthorized();

      if (error instanceof jwt.TokenExpiredError) {
        res.status(tkError.errorCode).json(tkError.message);
      } else if (error instanceof jwt.JsonWebTokenError) {
        res.status(jwtError.errorCode).json(jwtError.message);
      } else {
        res.json(error.message);
      }
    }
  };

module.exports = { requireAuthUser, requireAuthAdmin}

