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

class Role{
    constructor(){
        this.roleTable;
    }
    createRoleTable(){
        this.roleTable = sequelize.define('role', {
                role_name: { type: Sequelize.STRING(45), allowNull: false },
                role_status: Sequelize.STRING(10) 
            },{ 
                timestamps: false 
            });
        sequelize.sync();  
    }
}

role = new Role();
module.exports = role;
