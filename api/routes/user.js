const express = require('express');
const router = express.Router();
const Seqilize = require('sequelize'); 
const User = require('../models/user_model');

router.get('/', (req, res, next) => {
    User.findAll()
        .then(doc => {
            console.log(doc);
            if(doc === null) {
                doc = "There are no records in the database";
                res.status(200).json({
                    Message: "There are no records in the database"
                })
            }
            else{
                res.status(200).json({
                    Message: "List of all records in the database",
                    Records: doc
                });
            }
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/', (req, res, next) => {
    if(req.body.user_password === undefined){
        res.status(201).json({
            Message: "Error while inserting record",
            Input: "user_password cannot be null"
        })
    }
    else{
        //Password encryption
        const user = {                         
            user_email: req.body.user_email,
            user_phone: req.body.user_phone,
            user_password: req.body.user_password,
            user_activation_code: req.body.user_activation_code
        };
        User.create(user);
        res.status(201).json({
            Message: "New user created",
            Record: user
        });
    }
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    User
    .findById(id)
    .then(doc => {
        if(doc === null) {
            doc = "There is no record by that id";
            res.status(200).json({
                Message: "Searching for record",
                Record: doc
            });
        }
        else{
            res.status(200).json({
                Message: "Searching for record",
                Record: doc
            });
        }
    })                
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
        .then(doc => {
            if(doc === null) {
                doc = "There is no record by that id";
                res.status(200).json({
                    Message: "Record is updated: ",
                });
            }
        });
    User.update({
        user_email: req.body.user_email,
        user_phone: req.body.user_phone,
        user_password: req.body.user_password,
        user_activation_code: req.body.user_activation_code
    },{
        where: {id: req.params.id}, returning: true
    })
    .then(function (result){
        res.status(200).json({
            Message: "Updating a record",
            Record: result
        })
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    User
    .findById(id)
    .then(doc => {
        if(doc === null) {
            doc = "There is no record by that id";
        }
        res.status(200).json({
            Message: "Searching for record", 
            Record: doc
        });
    })
    User.destroy({where: {id: id}})
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;