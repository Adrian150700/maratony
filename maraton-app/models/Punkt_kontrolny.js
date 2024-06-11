const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")

class Punkt_kontrolny extends Model {}

Punkt_kontrolny.init(
	{
		id_punkt: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nazwa_punktu: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		odległość_punktu: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "Punkt_kontrolny",
		tableName: "Punkt_kontrolny",
		timestamps: false,
	}
)

module.exports = Punkt_kontrolny
