const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    signupFirstName: {
        type: String
    },
    signupLastName: {
        type: String
    },
    signupPhoneNumber: {
        type: String
    },
    signupNickName: {
        type: String
    },
    signupDescription: {
        type: String
    },
    signupPosition: {
        type: String
    },
    signupEmail: {
        type: String
    },
    signupPassword: {
        type: String
    }
});

module.exports = mongoose.model('User', User);