//Create this table before user (forgein key dependency)
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

const Role = sequelize.define('role', {
    role_name: { type: Sequelize.STRING(45), allowNull: false },
    role_status: Sequelize.STRING(10)
},{ 
    timestamps: false 
});

sequelize
    .sync();
 //   .then(() => 
 //   sequelize.close()
//);
module.exports = Role;