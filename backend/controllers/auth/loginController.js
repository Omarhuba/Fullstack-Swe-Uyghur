const { User } = require('../../models/userModel')
const jwt = require('jsonwebtoken')
const login = async(req, res)=>{
    try{
        const { email, password } = req.body
        // console.log(req.body);
        const user = await User.findOne({email}).exec()
        // console.log(user);
        if(!user) throw new Error('invalid creadential')

        user.comparePassword(password, async(err, isMached)=>{
            if(err){
                throw new Error('login problem' + err)
            }else if(!isMached){
                res.status(400).json('wrong password')
            }else{
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET,{expiresIn:'1d'})
                const userData = await User.findOne({ _id: user._id }).select(
                    "-password"
                  );

                  res.json({ userData, token });
            }
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = {login}