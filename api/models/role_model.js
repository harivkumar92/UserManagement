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
    getAllRoles(tempDoc){
        tempDoc = sequelize.query("SELECT * FROM `roles`", { type: sequelize.QueryTypes.SELECT});
        return tempDoc;
    }
    postRole(object){
        var tempDoc = this.roleTable.create(object);
        return tempDoc;
    }
    getRoleID(id){
        var tempDoc = this.roleTable.findById(id);
        return tempDoc;
    }
    patchRoleID(id){
        var tempDoc = this.roleTable.findById(id);
        return tempDoc;
    }
    updateNoName(id, status){
        this.roleTable.update({
            role_status: status
        },{
            where: {id: id}, returning: true
        })
    }
    updateWithName(id, name, status){
        this.roleTable.update({
            role_name: name,
            role_status: status
        },{
            where: {id: id}, returning: true
        })
    }
    deleteWithID(id){
        this.roleTable.destroy({where: {id: id}});
    }
}

role = new Role();
module.exports = role;
