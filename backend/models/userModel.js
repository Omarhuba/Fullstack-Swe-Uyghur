const mongoose = require("mongoose");

const sweuyghurDB = async ()=> {
    try{
        await mongoose.connect("mongodb://localhost:27017/sweuyghur")
        console.log('CONNECTED ....')
    }catch(error){
        console.log('Failed to connect to MongoDB', error)
    }
}

// module.exports = {sweuyghurDB};


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    adress: {
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
        reuired: true,
        enum: ['admin','client']
    }
},{
    timestamps: false
})

const Users = mongoose.model('Users', userSchema)
module.exports = {Users, sweuyghurDB};