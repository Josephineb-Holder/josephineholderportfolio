const mongoose = require('mongoose')

const contactTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    country:{
        type:String,
    },
    date:{
      type:Date,
      default:Date.now

    }
})

module.exports = mongoose.model('contactinfo', contactTemplate)