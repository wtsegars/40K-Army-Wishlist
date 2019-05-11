const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "wh40k_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;