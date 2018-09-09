const Role = require('../models/role_model');
const Base = require('../models/BaseClass_model');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('usermanagement', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

class User extends Base{
    constructor(){
        super();
        this.updated_At;
        this.created_At;
        this.userTable;
    }
    createUserTable(){
        this.userTable = sequelize.define('user', {
            user_email: Sequelize.STRING(100),
            user_phone: Sequelize.INTEGER,
            user_password: { type: Sequelize.CHAR(60).BINARY, allowNull: false },
            user_activation_code: Sequelize.STRING(100),
            user_status: { type: Sequelize.STRING(10), allowNull: false, defaultValue: 'inactive' },
            updated_At: Sequelize.DATE,
            created_At: Sequelize.DATE
            },{ 
                timestamps: false 
            });
        sequelize.sync();  
    }
    addUser(){
        const tempdoc = {
            user_email: "email",
            user_phone: "51231",
            user_password: "password"
        }
        this.userTable.create(tempdoc);
    }
    sample(){
        console.log("user_model works");
    }
    getAllUsers(tempDoc){
        //tempDoc = this.userTable.findAll();
        tempDoc = sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT});
        return tempDoc;

        /*
       sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT})     
            .then(doc => {
                console.log("model: ",tempDoc);
                               
               if(doc === '') {
                    var response = {
                        Message: "There are no records in the database"
                    };
                    console.log("reponse value: ", response);
                    return response;
                }
                else{
                    var response = {
                        Message: "List of all records in the database",
                        Records: doc
                    };
                    return response;
                }
            })
            
            .catch(err => {
                console.log(err);
            });
            //tempDoc = "after";
            return tempDoc;*/
    }
}

user = new User();
module.exports = user;