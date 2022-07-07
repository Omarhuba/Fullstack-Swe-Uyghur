const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      reuired: true,
    },
    password: {
      type: String,
      reuired: true,
    },
    role: {
      type: String,
      // reuired: true,
      enum: ["admin", "client"],
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      zip: {
        type: Number,
      },
    },
    avatar: {
      type: String,
        default: '',
    },
    verified: {
        type: Boolean,
        default: false,
        required: true
    }
  },
  {
    timestamps: false,
  }
);

//   ????????
// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     const hash = await bcrypt.hash(this.password, 8);
//     this.password = hash;
//   }
//   next();
// });

// userSchema.methods.comparePassword = async function (password) {
//   const result = await bcrypt.compare(password, this.password);
//   return result;
// };

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

const User = mongoose.model("User", userSchema);
module.exports = { User };
