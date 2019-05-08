const connection = require('./connection.js');

let orm = {
    selectAll: function() {
        connection.query("SELECT * FROM ??", [], function(err, result) {
            if (err) {
                return 
            }
            console.log(result);
        });
    },
    insertOne: function() {
        connection.query("INSERT ?? INTO ??", [], function(err, result) {
            if (err) {
                return
            }
            console.log(result);
        });
    },
    updateOne: function() {
        connection.query("UPDATE ?? WHERE ??", [], function(err, result) {
            if (err) {
                return
            }
            console.log(result);
        });
    }
};

module.exports = orm;