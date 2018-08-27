const mysql = require('mysql');

var mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'usermanagement'
});

mySqlConnection.connect((err) => {
    if(!err)
        console.log('DB is connected.');
    else
        console.log('DB is not connected. \n Error: ' + JSON.stringify(err, undefined, 2));
});
