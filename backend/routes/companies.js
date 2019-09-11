const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let User = require('../company.model');

router.put('/', function (req, res) {
    User.updateOne({_id: req.body.id},
        {
            $push: {
                company: {
                    name: req.body.nameCompany,
                    adress: req.body.adressCompany,
                    service: req.body.serviceCompany,
                    employers: req.body.employersCompany,
                    description: req.body.descriptionCompany,
                    typeCompany: req.body.typeCompany
                }
            }
        })
        .then(setTimeout(() => {
            User.findOne({
                _id: req.body.id
            }, function (err, user) {
                res.send(user);
            })
        }, 500))

});

router.patch('/', function (req, res) {
    User.updateOne(
        {"company._id": req.body.id},
        {
            $set: {
                "company.$.name": req.body.nameCompany,
                "company.$.adress": req.body.adressCompany,
                "company.$.service": req.body.serviceCompany,
                "company.$.employers": req.body.employersCompany,
                "company.$.description": req.body.descriptionCompany,
                "company.$.typeCompany": req.body.typeCompany
            }
        },
        function (err, res) {
            if (err) return console.log(err);
            console.log(res);

        }
    )
        .then(setTimeout(() => {
            User.findOne({
                "company._id": req.body.id
            }, function (err, user) {
                res.send(user);
            })
        }, 500))
});

router.delete('/', function (req, res) {
    User.updateOne(
        {"company._id": req.query.id},
        {
            $pull: {
                company: {
                    _id: req.query.id
                }
            }
        }
    )
        .then(setTimeout(() => {
            User.findOne({
                _id: req.query.userId
            }, function (err, user) {
                res.send(user);
                console.log(req.query.userId)
            })
        }, 500))



});

module.exports = router;