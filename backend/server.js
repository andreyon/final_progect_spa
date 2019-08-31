const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = 4000;

let User = require('./company.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/company', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// get list users

userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

// add user

userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);

    // let user = new User();
    // user.signupFirstName = req.query.signupFirstName;
    // user.signupLastName = req.query.signupLastName;
    // user.signupPhoneNumber = req.query.signupPhoneNumber;
    // user.signupNickName = req.query.signupNickName;
    // user.signupDescription = req.query.signupDescription;
    // user.signupPosition = req.query.signupPosition;
    // user.signupEmail = req.query.signupEmail;
    // user.signupPassword = req.query.signupPassword;

    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});


app.use('/users', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});