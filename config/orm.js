var connection = require("../config/connection.js");

var tableName = "burger"

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });

    },
    insertOne: function (burgerName, cb) {
        var queryString = "INSERT INTO burger (burger)";
        connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        cb(result);
    },
    updateOne: function (updatedValue, cb) {
        var queryString = "UPDATE burger SET burger WHERE ?";
        connection.query(queryString, [updatedValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
        cb(result);
    }
}



module.exports = orm;
