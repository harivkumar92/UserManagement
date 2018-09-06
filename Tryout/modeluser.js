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

const user = new BaseClass();

User = user.setUser();

User.belongsTo(Role);
sequelize
    .sync();
  //  .then(() => 
   // sequelize.close()
//);
module.exports = User;
