const connection = require('../config/connection.js');

let orm = {
    selectAll: function(tableSelect, cb) {
        connection.query("SELECT * FROM ??", [tableSelect], function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },
    insertOne: function(newInfo, tableSelect, cb) {
        connection.query("INSERT ?? INTO ??", [newInfo, tableSelect], function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },
    updateOne: function(updatedInfo, tableSelect, cb) {
        connection.query("UPDATE ?? WHERE ??", [updatedInfo, tableSelect], function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    }
};

module.exports = orm;