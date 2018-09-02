const express = require('express');
const router = express.Router();
const Seqilize = require('sequelize'); 
const Role = require('../models/role_model');

/**
 * @api {get} /role/ Request All User's Records
 * @apiName GetRoles
 * @apiGroup Role
 *
 * @apiSuccess {String} Message List of all records in the database
 * @apiSuccess {JSON} Records  JSON list of all records in the database
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "List of all records in the database",
 *       "Records": {
 *                   "role_name": "Admin",
 *                   "role_status": "Active"
 *                  }
 *     }
 *
 * @apiError Message There are no records in the database
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 OK
 *     {
 *       "Message": "There are no records in the database"
 *     }
 */
router.get('/', (req, res, next) => {
    Role.findAll()
        .then(doc => {
            console.log(doc);
            if(doc === null) {
                doc = "There are no records in the database";
                res.status(404).json({
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

/**
 * @api {post} /role/ Provide Role Record
 * @apiName PostRoles
 * @apiGroup Role
 * 
 * @apiParam (Request Body Fields) {String} role_name Name of role of the user
 * @apiParam (Request Body Fields) {String} [role_status] Current status of the role
 * 
 * @apiSuccess {String} Message New user created
 * @apiSuccess {JSON} Record  JSON of the role record in database
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "New role created",
 *       "Record": {
 *                   "role_name": "Admin",
 *                   "role_status": "Active"
 *                  }
 *     }
 *
 * @apiError Message Error while inserting record
 * @apiError Input role_name cannot be null
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 202 OK
 *     {
 *       "Message": "Error while inserting record",
 *       "Input": "role_name cannot be null"
 *     }
 */
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
            Message: "New role created",
            Record: role
        });
    }
});

/**
 * @api {get} /role/:id Request Role Record By ID
 * @apiName GetRoleID
 * @apiGroup Role
 *
 * @apiParam {Number} id Role's Unique ID
 * 
 * @apiSuccess {String} Message Searching for record
 * @apiSuccess {JSON} Record  JSON data of the record
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "Searching for record",
 *       "Record": {
 *                   "role_name": "Admin",
 *                   "role_status": "Active"   
 *                  }
 *     }
 *
 * @apiError Message Searching for record
 * @apiError Record There is no record by that id
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 OK
 *     {
 *       "Message": "Searching for record"
 *       "Record": "There is no record by that id"
 *     }
 */
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Role
    .findById(id)
    .then(doc => {
        if(doc === null) {
            doc = "There is no record by that id";
            res.status(404).json({
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

/**
 * @api {patch} /role/:id Update Role Record By ID
 * @apiName PatchRoleID
 * @apiGroup Role
 *
 * @apiParam {Number} id User's Unique ID
 * @apiParam (Request Body Fields) {String} role_name Role of the user 
 * @apiParam (Request Body Fields) {String} [role_status] Current status of role of the user
 * 
 * @apiSuccess {String} Message Record Updated
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "Record Updated"
 *     }
 *
 * @apiError Message Updating record
 * @apiError Record There is no record by that id
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 OK
 *     {
 *       "Message": "Updating record"
 *       "Record": "There is no record by that id"
 *     }
 */
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    Role.findById(id)
        .then(doc => {
            if(doc === null) {
                doc = "There is no record by that id";
                res.status(404).json({
                    Message: "Updating record",
                    Record: doc
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
            Message: "Record updated"
        })
    });
});

/**
 * @api {delete} /role/:id Delete Role Record By ID
 * @apiName DeleteRoleID
 * @apiGroup Role
 *
 * @apiParam {Number} id Role's Unique ID
 * 
 * @apiSuccess {String} Message Record deleted
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "Record deleted"
 *     }
 *
 * @apiError Message Searching for record
 * @apiError Record There is no record by that id
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 OK
 *     {
 *       "Message": "Searching for record"
 *       "Record": "There is no record by that id"
 *     }
 */
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Role
    .findById(id)
    .then(doc => {
        if(doc === null) {
            doc = "There is no record by that id";
        }
        res.status(404).json({
            Message: "Searching for record", 
            Record: doc
        });
    })
    Role.destroy({where: {id: id}})
        .then(doc =>{
            res.status(200).json({
                Message: "Record Deleted"
            })
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;