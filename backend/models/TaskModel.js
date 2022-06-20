const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
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

const Tasks = mongoose.model('Tasks', taskSchema)
module.exports = {Tasks}
