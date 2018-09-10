const Role = require('../models/role_model');
const Base = require('../models/BaseClass_model');
const config = require('f:/Freelance/git/UserManagement/config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.db.name, config.db.con_name, config.db.con_password, {
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

class User extends Base{
    constructor(){
        super();
        this.updated_At;
        this.created_At;
        this.userTable;
    }
    createUserTable(){
        this.userTable = sequelize.define(config.db.userTableName, {
            user_email: Sequelize.STRING(100),
            user_phone: Sequelize.INTEGER,
            user_password: { type: Sequelize.CHAR(60).BINARY, allowNull: false },
            user_activation_code: Sequelize.STRING(100),
            user_status: { type: Sequelize.STRING(10), allowNull: false, defaultValue: 'inactive' },
            updated_At: Sequelize.DATE,
            created_At: Sequelize.DATE
            },{ 
                timestamps: false 
            });
        this.userTable.belongsTo(Role.roleTable); //Adding Forgein key
        sequelize.sync();  
    }
    getAllUsers(tempDoc){
        tempDoc = sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT});
        return tempDoc;
    }
    postUser(object){
        var tempDoc = this.userTable.create(object);
        return tempDoc;
    }
    getUserID(id){
        var tempDoc = this.userTable.findById(id);
        return tempDoc;
    }
    patchUserID(id){
        var tempDoc = this.userTable.findById(id);
        return tempDoc;
    }
    updateNoPass(id, email, phone){
        this.userTable.update({
            user_email: email,
            user_phone: phone,
        },{
            where: {id: id}, returning: true
        })
    }
    updateWithPass(id, email, phone, hash){
        this.userTable.update({
            user_email: email,
            user_phone: phone,
            user_password: hash
        },{
            where: {id: id}, returning: true
        })
    }
    deleteWithID(id){
        this.userTable.destroy({where: {id: id}});
    }
}

user = new User();
module.exports = user;