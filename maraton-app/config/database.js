const { Sequelize } = require("sequelize")

// Konfiguracja połączenia z bazą danych
const sequelize = new Sequelize("mydb", "root", "", {
	host: "localhost",
	port: 3306,
	dialect: "mysql",
})

module.exports = sequelize
