var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
let User = require('../company.model');

router.put('/', function (req, res, next) {

    // let company = new User(req.body);

    // add company
    // User.updateOne({userName: req.body.userName},
    User.updateOne({userName: req.query.userName},

        {
            $push: {
                company: {
                    name: req.query.nameCompany,
                    // name: req.body.nameCompany,
                    adress: req.query.adressCompany,
                    // adress: req.body.adressCompany,
                    service: req.query.serviceCompany,
                    // service: req.body.serviceCompany,
                    employers: req.query.employersCompany,
                    // employers: req.body.employersCompany,
                    description: req.query.descriptionCompany,
                    // description: req.body.descriptionCompany,
                    typeCompany: req.query.typeCompany
                }
            }
            // type: req.body.typeCompany}}

        }, function (err, result) {

            if (err) return console.log(err);
            console.log(result);
        })
});

router.patch('/', function (req, res) {
    User.updateOne(
        {"company._id": req.body.id},
        {$set: {
                // "company.$.name": req.query.nameCompany,
                    "company.$.name": req.body.nameCompany,
                    // "company.$.adress": req.query.adressCompany,
                    "company.$.adress": req.body.adressCompany,
                    // "company.$.service": req.query.serviceCompany,
                    "company.$.service": req.body.serviceCompany,
                    // "company.$.employers": req.query.employersCompany,
                    "company.$.employers": req.body.employersCompany,
                    // "company.$.description": req.query.descriptionCompany,
                    "company.$.description": req.body.descriptionCompany,
                    // "company.$.typeCompany": req.query.typeCompany
                    "company.$.typeCompany": req.body.typeCompany
                }
        },
        function (err, res) {
            if (err) return console.log(err);
            console.log(res);

        }
    )
        .then(setTimeout(()=>{User.findOne({
            "company._id": req.body.id
        }, function(err, user) {
            res.send(user);
        })}, 500))
});

module.exports = router;