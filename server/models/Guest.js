const mongoose = require('mongoose')

const guestSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },

    name:{
        type: String,
        require: true
    },

    phone:{
        type: String,
        require: true,
    },

    dietary:{
        type: String,
        require: true,
        default: 'Non-Veg'
    },

    isconfirmed:{
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model('guest', guestSchema)