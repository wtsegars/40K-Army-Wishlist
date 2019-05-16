const mysql = require('mysql');

var connection;
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    socket:	"/Applications/MAMP/tmp/mysql/mysql.sock",
    database: "wh40kdb"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// function handleDisconnect() {
//   connection = mysql.createConnection(db_config);
//   console.log(db_config);
// }

// connection.connect(function(err) {          
//   if (err) {
//     console.log('error when connecting to db:', err);
//     setTimeout(handleDisconnect, 2000);
//   }
// });

// connection.on('error', function(err) {
//   console.log('db error', err);
//   if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
//     handleDisconnect();                         
//   } else {                                      
//     throw err;                                  
//   }
// });

module.exports = connection;