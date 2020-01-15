var mysql = require("mysql");
var connection;

// const JAWSDB_URL = {
//     host: "nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     port: 3306,
//     user: "i3ydrdpf4yzamc6i",
//     password: "nfhgr4y3ubehwlrv",
//     database: "jczyf4vwmte5ppy7"
// }

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection({ JAWSDB_URL })
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burger_db"
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})




module.exports = connection;