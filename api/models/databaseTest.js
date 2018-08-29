//Ensuring that a database of a name in file config.json exists
const Sequelize = require('sequelize');
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

sequelizeCheck
    .authenticate()
    .then(() => { 
        console.log('Connected to the web server');
        //Database Creation
        sequelizeCheck
            .query("CREATE DATABASE usermanagement;")
            .then(() => {
                console.log('Database Created');
                //Create tables for DB
                const User = sequelize.define('user', {
                    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
                    user_email: Sequelize.STRING(100),
                    user_phone: Sequelize.INTEGER,
                    user_password: { type: Sequelize.STRING(100), allowNull: false },
                    user_activation_code: Sequelize.STRING(100),
                    user_status: { type: Sequelize.STRING(10), allowNull: false }
                });
                const Role = sequelize.define('role', {
                    role_name: { type: Sequelize.STRING(45), allowNull: false },
                    role_status: Sequelize.STRING(10)
                },{ timestamps: false });
                //Creating a forgein key
                User.belongsTo(Role);
                //Populating the tables onto the DB
                sequelize
                    .sync()
                    .then(() => sequelize.close());
            })
            .catch(err => {
                console.error('A Database already exists');
            })
            .finally(() => {
                sequelizeCheck.close();
            })
    })
    .catch(err => {
        console.error('Unable to connect to the web server: ', err);
    });

