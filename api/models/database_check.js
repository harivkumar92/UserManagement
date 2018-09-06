//Ensuring that a database of a name in file config.json exists
const Sequelize = require('sequelize');
const user = require('../models/user_model');
const role = require('../models/role_model');
const sequelizeCheck = new Sequelize('', 'user', 'password', {
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

database = new Database();
database.createDatabase();