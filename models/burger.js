var orm = require("../config/orm");

var burger = {
    all: function (callback) {
        orm.selectAll("burger", function (res) {
            callback(res);
        })
    },
    add: function (callback) {
        orm.insertOne("burger", function (res) {
            callback(res)
        })
    },
    update: function (callback) {
        orm.updateOne("burger", function (res) {
            callback(res);
        })
    }
}

module.exports = burger;