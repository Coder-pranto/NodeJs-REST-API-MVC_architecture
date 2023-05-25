const mongoose = require('mongoose')    
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true,"Name can't be empty"],
        trim: true,
        unique: false,
        maxLength:[20,'too large'],
        minLength:[4,'too small'],
      },
      completed:{
        type: Boolean,
        default:false
      }
})
module.exports =  mongoose.model( 'Tasks' , TaskSchema)