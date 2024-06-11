const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Adres = require("./Adres")

class Organizator extends Model {}

Organizator.init(
	{
		id_organizator: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nazwa_organizator: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Adres_id_adres: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Adres,
				key: "id_adres",
			},
		},
	},
	{
		sequelize,
		modelName: "Organizator",
		tableName: "Organizator",
		timestamps: false,
	}
)

Organizator.belongsTo(Adres, { foreignKey: "Adres_id_adres" })

module.exports = Organizator
