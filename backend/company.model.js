const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let UserSchema = new Schema({
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
    userName: {
        type: String
    },
    password: {
        type: String
    },
    company: [
        {
            name: String,
            adress: String,
            service: String,
            employers: String,
            description: String,
            typeCompany: String
        }
]
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);