const express = require('express');
const router = express.Router();
const Seqilize = require('sequelize'); 
const Role = require('../models/role_model');

router.get('/', (req, res, next) => {
    Role.findAll()
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
    if(req.body.role_name === undefined){
        res.status(201).json({
            Message: "Error while inserting record",
            Input: "role_name cannot be null"
        })
    }
    else{
        //Password encryption
        const role = {                         
            role_name: req.body.role_name,
            role_status: req.body.role_status,
        };
        Role.create(role);
        res.status(201).json({
            Message: "New user created",
            Record: role
        });
    }
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Role
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
    Role.findById(id)
        .then(doc => {
            if(doc === null) {
                doc = "There is no record by that id";
                res.status(200).json({
                    Message: "Record is updated: ",
                });
            }
        });
    Role.update({
        role_name: req.body.role_name,
        role_status: req.body.role_status,
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

    Role
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
    Role.destroy({where: {id: id}})
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;