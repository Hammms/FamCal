const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
    dates: {type: Number, required: true}
});

module.exports = mongoose.model('day', daySchema);