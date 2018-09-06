const Role = require('../models/role_model');
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

class ModelBaseClass{
    constructor(){
        this.created_At;
        this.updated_At;
    }
}

module.exports = ModelBaseClass;