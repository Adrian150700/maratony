const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")

class Trasa extends Model {}

Trasa.init(
	{
		id_trasa: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		dystans_trasy: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		trudność_trasy: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "Trasa",
		tableName: "Trasa",
		timestamps: false,
	}
)

module.exports = Trasa
