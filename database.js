//Creating the 'Usermanagement' database with the models - 'user' and 'role'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('', 'user', 'password', {
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

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the web server');
        //Database Created
        sequelize
            .query("CREATE DATABASE TESTDB1;")
            .then(() => {
            console.log('Database Created');    
            
            })
    })
    .catch(err => {
        console.error('Unable to connect to the web server: ', err);
    });

