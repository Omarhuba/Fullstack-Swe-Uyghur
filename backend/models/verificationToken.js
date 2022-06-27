
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')


const verificationToken = new mongoose.Schema({




    
},{
    timestamps: false
})


verificationToken.pre('save', function generateHash(next){
    if(!this.isModified('password')){
        return next()
    }
    bcrypt.hash(this.password, 10 , (err, generateHash)=>{
        if(err) return next(err);
        this.password = generateHash;
        next()
    })
})

verificationToken.methods.comparePassword = function(password, next){
    bcrypt.compare(password, this.password, (err, isMatched)=>{
        if(err) return next(err)
        else{
            if(!isMatched){
                return next(null, isMatched)
            }else{
                return next(null, this)
            }
        }
    })
}


const Token = mongoose.model('User', verificationToken)
module.exports = { Token };