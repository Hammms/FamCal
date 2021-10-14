const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    

   
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        required: 'password required',
        min: [6, 'Too short, min is 5 characters'],
    }
}, {
    collection: 'users'
})


userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', userSchema)