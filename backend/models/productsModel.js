const mongoose = require('mongoose')

const sweuyghurDB = async ()=> {
    try{
        await mongoose.connect("mongodb://localhost:27017/sweuyghur")
        console.log('CONNECTED ....')
    }catch(error){
        console.log('Failed to connect to MongoDB', error)
    }
}

// module.exports = {sweuyghurDB};


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    product_img: {
        type: String,
    },
    price: {
        type: String,
        requried: true
    },
    amount: {
        type: Number,
        requried: true
    },
},{
    timestamps: false
})

const Products = mongoose.model('Products', productSchema)
module.exports = {Products, sweuyghurDB};  