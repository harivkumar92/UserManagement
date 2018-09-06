const role = require('../models/role_model');
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

class User{
    createUserTable(){
        sequelize.define('user', {
            user_email: Sequelize.STRING(100),
            user_phone: Sequelize.INTEGER,
            user_password: { type: Sequelize.CHAR(60).BINARY, allowNull: false },
            user_activation_code: Sequelize.STRING(100),
            user_status: { type: Sequelize.STRING(10), allowNull: false, defaultValue: 'inactive' },
            created_At: Sequelize.DATE,
            updated_At: Sequelize.DATE
            },{ 
                timestamps: false 
            });
        sequelize.sync();  
    }
    getAllUsers(){
        sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT})
            .then(doc => {
                console.log(doc);
                if(doc === null) {
                    var response = 404;
                    return response;
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
            });
    }
}

user = new User();
module.exports = user;