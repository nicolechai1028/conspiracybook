// Set up MySQL connection.
const Sequelize = require('sequelize');
var mysql = require('mysql');
// what is checkout? -RO
var connection = mysql.createConnection(process.env.JAWSDB_URL);

const { checkout } = require('../routes');

const sequelize = newSequelize('doxvfxz4qqsdi6tw', 'rw3oau02yfwjz6xvq', 'w3oau02yfwjz6xvq', {
  dialect: 'mysql'
})

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'rw3oau02yfwjz6xvq',
  password: 'w3oau02yfwjz6xvq',
  database: 'doxvfxz4qqsdi6tw'
});
}
// Make connection.
// added error handling but dont see in log? -RO
Sequelize(createConnection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
}));

Sequelize(dbConnection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
}));
// let connction = mysql.connction
//   function getConnectionStatus(){
//   if ({ retrun catch.err(console.log('db-connction failed'))
//   } else { 
//     console.log("db-connection succeess")
//   }};

// Export connection for our ORM to use.
module.exports = connection;
