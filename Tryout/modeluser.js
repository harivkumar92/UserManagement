const Role = require('../models/role_model');
const BaseClass = require('../Tryout/modelBaseclass');
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

class User extends BaseClass{
    constructor(){
        this.user_email;
        this.user_phone;
        this.user_password;
        this.user_activation_code;
        this.user_status;
    }

    createUser(){
        const User = sequelize.define('user', {
            user_email: Sequelize.STRING(100),
            user_phone: Sequelize.INTEGER,
            user_password: { type: Sequelize.CHAR(60).BINARY, allowNull: false },
            user_activation_code: Sequelize.STRING(100),
            user_status: { type: Sequelize.STRING(10), allowNull: false, defaultValue: 'inactive' },
            created_At: Sequelize.DATE,
            updated_At: Sequelize.DATE
        })
        return User;
    }
}

/*
const User = sequelize.define('user', {
    user_email: Sequelize.STRING(100),
    user_phone: Sequelize.INTEGER,
    user_password: { type: Sequelize.CHAR(60).BINARY, allowNull: false },
    user_activation_code: Sequelize.STRING(100),
    user_status: { type: Sequelize.STRING(10), allowNull: false, defaultValue: 'inactive' },
    created_At: Sequelize.DATE,
    updated_At: Sequelize.DATE


User = user.setUser();

User.belongsTo(Role);
sequelize
    .sync();
  //  .then(() => 
   // sequelize.close()
//);
module.exports = User;
*/