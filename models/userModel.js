const mongoose = require('mongoose');
const validator = require('validator');
// name, email, photo, password, confirmpassword

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [false, 'please tell us your name!']
    },
    email: {
        type: String,
        required: [false, 'please provide your email address'],
        lowercase: true,
        validate: [validator.isEmail, 'please provide a valid email']
    },
    mobile: Number,
    message: String
});




const Vidhayak = mongoose.model('Vidhayak', userSchema);


module.exports = Vidhayak; 