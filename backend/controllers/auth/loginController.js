const { User } = require('../../models/userModel')
const jwt = require('jsonwebtoken')
const { sendError } = require('../../utils/helper')
const login = async(req, res)=>{
    const {email, password} = req.body
    if(!email.trim() || !password.trim()) return sendError(res, 'Email or Password missing!')

    const user = await User.findOne({email})
    if(!user) return sendError(res, 'User not found!')

    const isMatched = await user.comparePassword(password)
    if(!isMatched) return sendError(res, 'Email or Password dose not match!')

    const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
        expiresIn: '1d'})


    res.json({success: true, user:{name: user.name, email: user.email, id: user._id, token}})

    // try{
    //     const { email, password } = req.body
    //     // console.log(req.body);
    //     const user = await User.findOne({email}).exec()
    //     // console.log(user);
    //     if(!user) {
    //         // throw new Error('invalid creadential')
    //         res.json('Invalid Credential!!!!')
    //     }
    //     user.comparePassword(password, async(err, isMached)=>{
    //         if(err){
    //             throw new Error('login problem' + err)
    //         }else if(!isMached){
    //             res.status(400).json('Invalid Password!!!')
    //         }else{
    //             const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET,{expiresIn:'1d'})
    //             const userData = await User.findOne({ _id: user._id }).select(
    //                 "-password"
    //               );

    //               res.json({ userData, token });
    //         }
    //     })
    // }catch(err){
    //     console.log(err);
    // }
}

module.exports = {login}