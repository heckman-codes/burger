var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burger", function (res) {
            console.log(res)
            cb(res);
        })
    },
    add: function (name, cb) {
        orm.insertOne("burger", function (res) {
            cb(res)
        })
    },
    update: function (devour, cb) {
        orm.updateOne("burger", function (res) {
            cb(res);
        })
    }
}

module.exports = burger;