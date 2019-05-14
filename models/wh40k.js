const orm = require('../config/orm.js');

let wh40k = {
    selectAll: function(cb) {
        orm.selectAll("figures", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("figures", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("figures", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = wh40k;