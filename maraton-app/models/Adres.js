const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")

class Adres extends Model {}

Adres.init(
	{
		id_adres: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		Miasto: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		nr_budynku: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		nr_mieszkania: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		kod_pocztowy: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Ulica: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		numer_telefonu: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "Adres",
		tableName: "Adres",
		timestamps: false,
	}
)

module.exports = Adres
