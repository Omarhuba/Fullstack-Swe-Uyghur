const mongoose = require('mongoose')


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

module.exports = { Products };