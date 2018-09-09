const express = require('express');
const router = express.Router();
const Seqilize = require('sequelize'); 
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const controller = require('../controller/user_controller');

/**
 * @api {get} /user/ Request All User's Records
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiSuccess {String} Message List of all records in the database
 * @apiSuccess {JSON} Records  JSON list of all records in the database
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "List of all records in the database",
 *       "Records": {
 *                   "user_ email": "email1",
 *                   "user_phone": "9500623044"
 *                   "user_password": "Ae512xx59qwe0"
 *                   "user_activation_code": "ACTIVATE1"
 *                   "user_status": "inactive"
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
/*router.get('/', (req, res, next) => {
    var document;
    controller.userGetAll(document).then(doc => {
         console.log("finally: ",doc);
        });
});*/

router.get('/', (req, res, next) => {
    var response = res;
    controller.userGetAll(response);
});

/**
 * @api {post} /user/ Provide User Record
 * @apiName PostUsers
 * @apiGroup User
 * 
 * @apiParam (Request Body Fields) {String} [user_email] User email address 
 * @apiParam (Request Body Fields) {String} [user_phone] User phone number
 * @apiParam (Request Body Fields) {String} user_password User password
 * 
 * @apiSuccess {String} Message New user created
 * @apiSuccess {JSON} Record  JSON of the user record in database
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "New user created",
 *       "Record": {
 *                   "user_ email": "email1",
 *                   "user_phone": "9500623044"
 *                   "user_password": "Ae512xx59qwe0"
 *                   "user_activation_code": "ACTIVATE1"
 *                  }
 *     }
 *
 * @apiError Message Error while inserting record
 * @apiError Input user_password cannot be null
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 202 OK
 *     {
 *       "Message": "Error while inserting record",
 *       "Input": "user_password cannot be null"
 *     }
 */
/*router.post('/', (req, res, next) =>{
    const password = req.body.user_password;

    if(password === undefined || password == "") {
        res.status(203).json( {
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
});*/

router.post('/', (req, res, next) =>{
    var request = req;
    var response = res;

    controller.userPost(request, response);
});

/**
 * @api {get} /user/:id Request User Record By ID
 * @apiName GetUserID
 * @apiGroup User
 *
 * @apiParam {Number} id User's Unique ID
 * 
 * @apiSuccess {String} Message Searching for record
 * @apiSuccess {JSON} Record  JSON data of the record
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "Searching for record",
 *       "Record": {
 *                   "user_ email": "email1",
 *                   "user_phone": "9500623044"
 *                   "user_password": "Ae512xx59qwe0"
 *                   "user_activation_code": "ACTIVATE1"
 *                   "user_status": "inactive"
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
router.get('/:id', (req, res, next) =>{
    var request = req;
    var response = res;

    controller.userGetID(request, response);              
});

/**
 * @api {patch} /user/:id Update User Record By ID
 * @apiName PatchUserID
 * @apiGroup User
 *
 * @apiParam {Number} id User's Unique ID
 * @apiParam (Request Body Fields) {String} [user_email] User email address 
 * @apiParam (Request Body Fields) {String} [user_phone] User phone number
 * @apiParam (Request Body Fields) {String} user_password User password
 * 
 * @apiSuccess {String} Message Record updated with hashed password
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *     {
 *       "Message": "Record updated with hashed password"
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
router.patch('/:id', (req, res, next) =>{
    var request = req;
    var response = res;

    controller.userPatchID(request, response);
});

/**
 * @api {delete} /user/:id Delete User Record By ID
 * @apiName DeleteUserID
 * @apiGroup User
 *
 * @apiParam {Number} id User's Unique ID
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
    var request = req;
    var response = res;
    
    controller.userDeleteID(request, response);
});

module.exports = router;