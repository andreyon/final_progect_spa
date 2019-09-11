var express = require('express');
var router = express.Router();
let User = require('../company.model');
var passport = require('passport');
require('../config/passport')(passport);

router.get('/', passport.authenticate('jwt', {session: false}), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        User.find(function (err, users) {
            if (err) return next(err);
            res.json(users);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};


// добавить нового пользователя
router.post('/', function (req, res, next) {
    if (!req.body.signupFirstName || !req.body.signupLastName || !req.body.signupPhoneNumber || !req.body.signupNickName || !req.body.signupDescription || !req.body.signupPosition || !req.body.userName || !req.body.password) {
        res.json({success: false, msg: 'Please pass all fields.'});
    } else {
        let user = new User(req.body);
        user.save()
            .then(user => {
                res.status(200).json({success: true, msg: 'user added successfully'});
            })
            .catch(err => {
                res.status(400).json({success: false, msg: 'adding new user failed'});
            });
    }
});

router.patch('/', function (req, res, next) {
    User.updateOne({_id: req.body.id},
        {
            signupFirstName: req.body.signupFirstName,
            signupLastName: req.body.signupLastName,
            signupPhoneNumber: req.body.signupPhoneNumber,
            signupNickName: req.body.signupNickName,
            signupDescription: req.body.signupDescription,
            signupPosition: req.body.signupPosition,
            signupEmail: req.body.signupEmail
        })
        .then(setTimeout(()=>{User.findOne({
            _id: req.body.id
        }, function(err, user) {
                res.send({user});
            })}, 500))
});

module.exports = router;