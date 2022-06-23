const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        street:{
            type: String,
        },
        city:{
            type: String,
        },
        zip:{
            type: Number,
        }
    },
    email:{
        type: String,
        reuired: true,
    },
    password:{
        type: String,
        reuired: true,
    },
    role:{
        type: String,
        // reuired: true,
        enum: ['admin','client']
    }
},{
    timestamps: false
})

// function generateHash(){
//     const hash = bcrypt.hashSync(password)
//     return hash
// }

userSchema.pre('save', function generateHash(next){
    if(!this.isModified('password')){
        return next()
    }
    bcrypt.hash(this.password, 10 , (err, generateHash)=>{
        if(err) return next(err);
        this.password = generateHash;
        next()
    })
})

userSchema.methods.comparePassword = function(password, next){
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


const User = mongoose.model('User', userSchema)
module.exports = { User };