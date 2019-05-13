const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    socket:	"/Applications/MAMP/tmp/mysql/mysql.sock",
    database: "wh40k_db"
});

function handleDisconnect() {
  connection = mysql.createConnection(db_config);
}

connection.connect(function(err) {          
  if (err) {
    console.log('error when connecting to db:', err);
    setTimeout(handleDisconnect, 2000);
  }
});

connection.on('error', function(err) {
  console.log('db error', err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
    handleDisconnect();                         
  } else {                                      
    throw err;                                  
  }
});

module.exports = connection;