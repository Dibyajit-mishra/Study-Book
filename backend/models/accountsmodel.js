const mongoose = require("mongoose")

const accScheme = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate:{
            validator:function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email`
        }
    },
    password:{
        type:String,
        trim:true
    }},
    {timestamps:true,}
)

module.exports = mongoose.model('Account',accScheme)