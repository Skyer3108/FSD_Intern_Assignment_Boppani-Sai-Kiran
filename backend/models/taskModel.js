const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true,

    },

    desc:{
        type:String,
        required:true,
    },

    priority:{
        type:String,
        enum:['Low','Medium','High'],
        default:'Low'
       
    },
    status:{
        type:String,
        enum:['Pending','Completed'],
        default:'Pending'
    }
})

module.exports=mongoose.model('task',taskSchema)