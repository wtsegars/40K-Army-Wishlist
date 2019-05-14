const connection = require('../config/connection.js');

function createQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

function objSeq(obj) {
    let arr = [];

    for (var key in ob) {
        var value = ob[key];
        
        if (Object.hasOwnProperty.call(obj, key)) {
          
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          
          arr.push(key + "=" + value);
        }
      }
      return arr.toString();
}

let orm = {
    selectAll: function(tableSelect, cb) {
        let queryString = "SELECT * FROM " + tableSelect + ";";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },
    insertOne: function(tables, cols, vals, cb) {
        let queryString = "INSERT INTO " + tables;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += createQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objSeq(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    }
};

module.exports = orm;