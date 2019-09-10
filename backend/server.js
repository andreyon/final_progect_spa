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
app.use(bodyParser.urlencoded({'extended':'false'}));

var users = require('./routes/users'); //routs
var companies = require('./routes/companies'); //routs

mongoose.connect('mongodb://127.0.0.1:27017/company', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});


var passport = require('passport');
var settings = require('./config/settings');
require('./config/passport')(passport);
var jwt = require('jsonwebtoken');
var auth = require('./routes/auth');
var logout = require('./routes/logout');

app.use('/login', auth); // роутер идентификации
app.use('/current', auth); // роутер текущего пользователя
app.use('/logout', logout); // роутер выхода
app.use('/users', users); // end point get all users from DB
app.use('/users/add', users); // end point add user
app.use('/users/update', users); // point patch user
app.use('/companies/update', companies); // update company
app.use('/companies/add', companies); // add company

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

module.exports = app; // убрать или откорректировать если нужен експорт







/*
// здесь все работало - проходила проверка юзера и срабатывал роутер

// passport
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');

app.use(expressSession({secret: 'mySecretKey'})); // здесь можно указать время сессии !
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// passport/login.js Стратегия

passport.use('local', new LocalStrategy({
        usernameField: 'signupEmail',
        passwordField: 'signupPassword' //я поменял под свои поля
    },
    function(username, password, done) {
        // проверка в mongo, существует ли пользователь с таким логином
        User.findOne({ 'signupEmail' :  username },
            function(err, user) {
                // В случае возникновения любой ошибки, возврат с помощью метода done
                if (err)
                    return done(err);
                // Пользователь не существует, ошибка входа и перенаправление обратно
                if (!user){
                    console.log('User Not Found with Email '+username);
                    return done(null, false,
                        // req.flash('message', 'User Not found.')
                    );
                }
                // Пользователь существует, но пароль введен неверно, ошибка входа
                if (user.signupPassword !== password){
                    console.log('Invalid Password');
                    return done(null, false,
                        // req.flash('message', 'Invalid Password')
                    );
                }
                // Пользователь существует и пароль верен, возврат пользователя из
                // метода done, что будет означать успешную аутентификацию
                return done(null, user);
            }
        );
    }));


app.post('/users/login',
    passport.authenticate('local', { successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash: true })
);
*/