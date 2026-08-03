const mongoose = require("mongoose")

const courseSchema=new mongoose.Schema({
    courseName :{
        type: String,
        trim: true,
        required: true,
    },
    AccountId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Account,
        required: true
    }
},
{timestamps:true,})

module.exports = mongoose.model('Courses',courseSchema)