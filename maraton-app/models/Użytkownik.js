const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Uczestnik = require("./Uczestnik")

class Użytkownik extends Model {}

Użytkownik.init(
	{
		id_użytkownik: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nazwa_użytkownika: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		haslo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		data_rejestracji: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		Uczestnik_id_uczestnik: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Uczestnik,
				key: "id_uczestnik",
			},
		},
	},
	{
		sequelize,
		modelName: "Użytkownik",
		tableName: "Użytkownik",
		timestamps: false,
	}
)

Użytkownik.belongsTo(Uczestnik, { foreignKey: "Uczestnik_id_uczestnik" })

module.exports = Użytkownik
