Database = require('../models/database_check');
User = require('../models/user_model');

class Controller extends Database{
    checkDatabase(){
        super.createDatabase();
    }
/*    userGetAll(document){
        var tempDoc;

        document = User.getAllUsers(tempDoc);//.then(doc => { console.log("inside promise: ",doc); document = 10;});      
        return document;
    }*/
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
    sample(){
        console.log("controller works");
    }
}

controller = new Controller();
module.exports = controller;