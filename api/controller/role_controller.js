Database = require('../models/database_check');
Role = require('../models/role_model');
const bcrypt = require('bcrypt');

class RoleController extends Database{
    roleGetAll(response){
        var tempDoc;

        Role.getAllRoles(tempDoc).then(doc => {
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
    rolePost(request, response){
        const name = request.body.role_name;

        if(name === undefined || name == "") {
            response.status(203).json( {
                Message: "Error while inserting record",
                Input: "role_name cannot be null"
            })
        }
        else{
                const role = {                         
                    role_name: request.body.role_name,
                    role_status: request.body.role_status
                };
                Role.postRole(role).then(doc => {
                    response.status(201).json({
                        Message: "New role created",
                        Record: doc
                    });
                });
        }
    }//END rolePost()
    roleGetID(request, response){
        const id = request.params.id;

        Role.getRoleID(id).then(doc => {
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
    }//END roleGetID()
    rolePatchID(request, response){
        const id = request.params.id;

        Role.patchRoleID(id).then(doc =>{
            if(doc === null){
                doc = "There is no record by that id";
                response.status(404).json({
                    Message: "Updating Record",
                    Record: doc
                });
            }
            else{
                //If role_name is not being updated, no need to enter here
                if(request.body.role_name === undefined){
                    var tempid = request.params.id;

                    Role.updateNoName(tempid, request.body.role_status);
                    response.status(200).json({
                        Message: "Record updated"
                    });
                }
                //Throw error if given role name is a null string
                else if(request.body.role_name == ""){
                    response.status(203).json({
                        Message: "Error while inserting record",
                        Input: "role_name cannot be null"
                    })
                }
                else{
                    const name = request.body.role_name;

                        var tempid = request.params.id;

                        Role.updateWithName(tempid, name, request.body.role_status);
                        response.status(200).json({
                            Message: "Record updated"
                        });   
                }  
            }
        });
    }//END rolePatchID()
    roleDeleteID(request, response){
        const id = request.params.id;

        Role.getRoleID(id).then(doc => {
            if(doc === null) {
                doc = "There is no record by that id";
            
                response.status(404).json({
                    Message: "Searching for record", 
                    Record: doc
                });
            }
            else{
                Role.deleteWithID(id);
                response.status(200).json({
                    Message: "Record deleted"
                });
            }
        });
    }//END roleDeleteID
}

rcontroller = new RoleController();
module.exports = rcontroller;