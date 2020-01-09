var connection = require("../config/connection");

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burger";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (burgerName) {
        var queryString = "INSERT INTO burger (burger)";
        connection.query(queryString, [burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (updatedValue) {
        var queryString = "UPDATE burger SET burger WHERE ?";
        connection.query(queryString, [updatedValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}



module.exports = orm;