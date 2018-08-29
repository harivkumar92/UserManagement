const express = require('express');
const router = express.Router();
const Seqilize = require('sequelize'); 
const User = require('../models/user_model');
const bcrypt = require('bcrypt');

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

router.post('/', (req, res, next) =>{
    const password = req.body.user_password;

    if(password === undefined || password == "") {
        res.status(201).json( {
            Message: "Error while inserting record",
            Input: "user_password cannot be null"
        })
    }
    else{
        //Password hashing
        bcrypt.hash(password, 10, function(err,hash) {
            const user = {                         
                user_email: req.body.user_email,
                user_phone: req.body.user_phone,
                user_password: hash,
            };
            User.create(user);
        });
        const userRes = {                         
            user_email: req.body.user_email,
            user_phone: req.body.user_phone,
            user_password: password,
            user_activation_code: req.body.user_activation_code
        };
        res.status(201).json({
            Message: "New user created",
            Record: userRes
        })
    }
});

router.get('/:id', (req, res, next) =>{
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

router.patch('/:id', (req, res, next) =>{
    const id = req.params.id;

    User.findById(id)
        .then(doc =>{
            if(doc === null){
                doc = "There is no record by that id";
                res.status(200).json({
                    Message: doc,
                });
            }
            else{
                //If password is not being updated, no need to hash here
                if(req.body.user_password === undefined){
                    User.update({
                        user_email: req.body.user_email,
                        user_phone: req.body.user_phone,
                    },{
                        where: {id: req.params.id}, returning: true
                    })
                    .then(function (result){
                        res.status(200).json({
                            Message: "Record updated"
                        })
                    }); 
                }
                //Throw error if given password is a null string
                else if(req.body.user_password == ""){
                    res.status(201).json({
                        Message: "Error while inserting record",
                        Input: "user_password cannot be null"
                    })
                }
                else{
                    const password = req.body.user_password;

                    bcrypt.hash(password, 10, function(err,hash){
                        User.update({
                            user_email: req.body.user_email,
                            user_phone: req.body.user_phone,
                            user_password: hash
                        },{
                            where: {id: req.params.id}, returning: true
                        })
                        .then(function (result){
                            res.status(200).json({
                                Message: "Record updated with hashed password"
                            })
                        });
                    });
                }
                
            }
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