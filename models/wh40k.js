const orm = require('../config/orm.js');

let wh40k = {
    selectAll: function(cb) {
        orm.selectAll("figures", function(res) {
            cb(res);
        });
    },
    insertOne: function(tableSelect, newInfo, cb) {
        orm.insertOne("figures", tableSelect, newInfo, function(res) {
            cb(res);
        });
    },
    updateOne: function(updatedInfo, tableSelect, cb) {
        orm.updateOne("figures", updatedInfo, tableSelect, function(res) {
            cb(res);
        });
    }
};

module.exports = wh40k;