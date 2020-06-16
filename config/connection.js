// Set up MySQL connection.
const Sequelize = require('sequelize');
var mysql = require('mysql');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql'
})

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'conspbook_db'
});
}
// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
