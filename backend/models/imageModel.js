const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    }
},{
    timestamp: false
})

const Images = mongoose.model('Tasks', imageSchema)
module.exports = {Images}
