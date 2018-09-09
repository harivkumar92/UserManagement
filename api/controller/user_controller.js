Database = require('../models/database_check');
User = require('../models/user_model');
const bcrypt = require('bcrypt');

class Controller extends Database{
    checkDatabase(){
        super.createDatabase();
    }
    userGetAll(response){
        var tempDoc;

        User.getAllUsers(tempDoc).then(doc => {
            if(doc == ""){
                response.status(404).json({
                    Message: "There are no records in the database"
                    });
            }
            else{
                response.status(200).json({
                    Message: "List of all records in the database",
                    Records: doc
                    });
            }    
        });      
    }
    userPost(request, response){
        const password = request.body.user_password;

        if(password === undefined || password == "") {
            response.status(203).json( {
                Message: "Error while inserting record",
                Input: "user_password cannot be null"
            })
        }
        else{
            //Password hashing
            bcrypt.hash(password, 10, function(err, hash) {
                const user = {                         
                    user_email: request.body.user_email,
                    user_phone: request.body.user_phone,
                    user_password: hash,
                };
                User.postUser(user).then(doc => {
                    const userRes = {                         
                        user_email: request.body.user_email,
                        user_phone: request.body.user_phone,
                        user_password: password,
                        user_activation_code: request.body.user_activation_code
                    };
                    response.status(201).json({
                        Message: "New user created",
                        Record: userRes
                    })
                })
            });
        }
    }
    userGetID(request, response){
        const id = request.params.id;

        User.getUserID(id).then(doc => {
            if(doc === null) {
                doc = "There is no record by that id";
                response.status(404).json({
                    Message: "Searching for record",
                    Record: doc
                });
            }
            else{
                response.status(200).json({
                    Message: "Searching for record",
                    Record: doc
                });
            }
        })
    }
    userPatchID(request, response){
        const id = request.params.id;

        User.patchUserID(id).then(doc =>{
            if(doc === null){
                doc = "There is no record by that id";
                response.status(404).json({
                    Message: doc,
                });
            }
            else{
                //If password is not being updated, no need to hash here
                if(request.body.user_password === undefined){
                    var email = request.body.user_email;
                    var phone = request.body.user_phone;
                    var tempid = request.params.id;

                    User.updateNoPass(tempid, email, phone);
                    response.status(200).json({
                        Message: "Record updated"
                    });
                }
                //Throw error if given password is a null string
                else if(request.body.user_password == ""){
                    response.status(203).json({
                        Message: "Error while inserting record",
                        Input: "user_password cannot be null"
                    })
                }
                else{
                    const password = request.body.user_password;

                    bcrypt.hash(password, 10, function(err, hash){
                        var email = request.body.user_email;
                        var phone = request.body.user_phone;
                        var tempid = request.params.id;

                        User.updateWithPass(tempid, email, phone, hash);
                        response.status(200).json({
                            Message: "Record updated with hashed password"
                        });   
                     });
                }  
            }
        });
    }//END UserPatchID
    userDeleteID(request, response){
        const id = request.params.id;

        User.getUserID(id).then(doc => {
            if(doc === null) {
                doc = "There is no record by that id";
            
                response.status(404).json({
                    Message: "Searching for record", 
                    Record: doc
                });
            }
            else{
                User.deleteWithID(id);
                response.status(200).json({
                    Message: "Record deleted"
                });
            }
        });
    }//END userDeleteID
}

controller = new Controller();
module.exports = controller;