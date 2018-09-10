//Ensuring that a database of a name in file config.json exists
const Sequelize = require('sequelize');
const config = require('f:/Freelance/git/UserManagement/config');
const user = require('../models/user_model');
const role = require('../models/role_model');
const sequelizeCheck = new Sequelize('', config.db.con_name, config.db.con_password, {
    host: config.db.host,
    dialect: config.db.dialect,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: config.db.port,
        idle: 10000
    }
});

class Database{
    createDatabase(){
        sequelizeCheck
            .authenticate()
            .then(() => { 
                console.log('Connected to the web server');
                //Database Creation
                sequelizeCheck
                    .query("CREATE DATABASE IF NOT EXISTS usermanagement;")
                    .then(() => {
                        console.log('Database is ready');
                        role.createRoleTable();
                        user.createUserTable();
                    })
                    .catch(err => {
                        console.error(err);
                    })
                    .finally(() => {
                        sequelizeCheck.close();
                    })
            })
            .catch(err => {
                console.error('Unable to connect to the web server: ', err);
            });
    }
}

//database = new Database();
//database.createDatabase();
module.exports = Database;