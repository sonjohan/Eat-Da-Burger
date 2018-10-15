var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'n6xfhhvika680w7j',        
        password: 'cye6enuoduf37myf',
        database: 'wvzhu9l8154codmy'
    });

    connection.connect(function(err){
        if (err) throw err
    })
};


module.exports = connection;