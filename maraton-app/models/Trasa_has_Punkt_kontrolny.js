const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Trasa = require("./Trasa")
const Punkt_kontrolny = require("./Punkt_kontrolny")

class Trasa_has_Punkt_kontrolny extends Model {}

Trasa_has_Punkt_kontrolny.init(
	{
		Trasa_id_trasa: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Trasa,
				key: "id_trasa",
			},
		},
		Punkt_kontrolny_id_punkt: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Punkt_kontrolny,
				key: "id_punkt",
			},
		},
	},
	{
		sequelize,
		modelName: "Trasa_has_Punkt_kontrolny",
		tableName: "Trasa_has_Punkt_kontrolny",
		timestamps: false,
	}
)

Trasa_has_Punkt_kontrolny.belongsTo(Trasa, { foreignKey: "Trasa_id_trasa" })
Trasa_has_Punkt_kontrolny.belongsTo(Punkt_kontrolny, {
	foreignKey: "Punkt_kontrolny_id_punkt",
})

module.exports = Trasa_has_Punkt_kontrolny
