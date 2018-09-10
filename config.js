const config = {
    app: {
      port: 3000
    },
    db: {
      host: 'localhost',
      port: 30000,
      name: 'usermanagement',
      con_name: 'user',
      con_password: 'password',
      dialect: 'mysql',
      userTableName : 'user',
      roleTableName: 'role'
    }
};

module.exports = config;