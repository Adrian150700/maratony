const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")

class Płatność extends Model {}

Płatność.init(
	{
		id_płatność: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		status_płatności: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		data_płatności: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		metoda_płatności: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		kwota_płatności: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "Płatność",
		tableName: "Płatność",
		timestamps: false,
	}
)

module.exports = Płatność
