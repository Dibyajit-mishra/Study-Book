const mongoose = require("mongoose")

const chapterBookmarkedSchema = new mongoose.Schema({
    bookmarked:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'chapter',
    },
        date: {
        type: Date,
        default: Date.now
    },
    status:Boolean
})

const bookmarkedSchema = new mongoose.Schema({
    bookMarkedCourse : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"courseSchema",
        required:"true"
    },
    bookMarkedChapter:[chapterBookmarkedSchema],
    accountId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: true
    },
    status:Boolean
},{timestamps:true})

module.exports = mongoose.model("bookmark",bookmarkedSchema)