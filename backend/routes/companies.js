var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
let User = require('../company.model');

router.post('/', function (req, res, next) {

    // let company = new User(req.body);

    // add company
    User.updateOne({userName: req.body.userName},
        {$push:{
            company: {
                name: req.body.adressCompany,
                adress: req.body.adressCompany,
                service: req.body.serviceCompany,
                employers: req.body.employersCompany,
                description: req.body.descriptionCompany}}
        }, function (err, result) {

            if (err) return console.log(err);
            console.log(result);
        })
});

router.patch('/', function (req, res, next) {

    // let company = new User(req.body);

    User.updateOne({userName: req.body.userName},
        {
            company: {
                name: req.body.adressCompany,
                adress: req.body.adressCompany,
                service: req.body.serviceCompany,
                employers: req.body.employersCompany,
                description: req.body.descriptionCompany}
        }, function (err, result) {

            if (err) return console.log(err);
            console.log(result);
        })
});

module.exports = router;