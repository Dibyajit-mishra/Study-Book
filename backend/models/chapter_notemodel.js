const mongoose = require("mongoose")

const chapterContentSchema= new mongoose.Schema({
    heading:{
        type:String,
        trim: true,
        required:true    
    },
    content:{
        type:String,
        trim: true,
        required:true 
    },
    image:String,
    date:{
        type: Date,
        default: Date.now
    }
})

const chapterSchema = new mongoose.Schema({
    topic: {type:String,
        required:true,
        trim: true
    },
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"courses",
        required:true
    },
    content:[chapterContentSchema]
},{timestamps:true})

module.exports = mongoose.model("chapter",chapterSchema)