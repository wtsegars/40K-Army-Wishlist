const connection = require('./connection.js');

let orm = {
    selectAll: function(tableSelect) {
        connection.query("SELECT * FROM ??", [tableSelect], function(err, result) {
            if (err) {
                return 
            }
            console.log(result);
        });
    },
    insertOne: function(newInfo, tableSelect) {
        connection.query("INSERT ?? INTO ??", [newInfo, tableSelect], function(err, result) {
            if (err) {
                return
            }
            console.log(result);
        });
    },
    updateOne: function(updatedInfo, tableSelect) {
        connection.query("UPDATE ?? WHERE ??", [updatedInfo, tableSelect], function(err, result) {
            if (err) {
                return
            }
            console.log(result);
        });
    }
};

module.exports = orm;