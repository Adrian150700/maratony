const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Wydarzenie = require("./Wydarzenie")
const Organizator = require("./Organizator")

class Wydarzenie_has_Organizator extends Model {}

Wydarzenie_has_Organizator.init(
	{
		Wydarzenie_id_wydarzenie: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Wydarzenie,
				key: "id_wydarzenie",
			},
		},
		Organizator_id_organizator: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Organizator,
				key: "id_organizator",
			},
		},
	},
	{
		sequelize,
		modelName: "Wydarzenie_has_Organizator",
		tableName: "Wydarzenie_has_Organizator",
		timestamps: false,
	}
)

Wydarzenie_has_Organizator.belongsTo(Wydarzenie, {
	foreignKey: "Wydarzenie_id_wydarzenie",
})
Wydarzenie_has_Organizator.belongsTo(Organizator, {
	foreignKey: "Organizator_id_organizator",
})

module.exports = Wydarzenie_has_Organizator
