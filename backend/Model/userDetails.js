const mongoose=require('mongoose')

const userDetailsSchema=new mongoose.Schema({
    name:{
        type:'String',
        required:true,
        trim:true
    },
    enrollment_number:{
        type:Number,
        required:true,
    },
    age:{
        type:Number
    }
})

const userModel=mongoose.model('userDetails',userDetailsSchema)
module.exports=userModel