const mongoose = require('mongoose');


const resettokenSchema = new mongoose.Schema({

    resettoken: { 
        type: String, 
        unique: true,
        required: true 
    },
    userId: {
        type: String,
        unique: true,
        required: true
    }

});


module.exports = mongoose.model('passwordResetToken', resettokenSchema);