const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);
