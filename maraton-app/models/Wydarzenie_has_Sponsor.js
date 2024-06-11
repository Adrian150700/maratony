const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Wydarzenie = require("./Wydarzenie")
const Sponsor = require("./Sponsor")

class Wydarzenie_has_Sponsor extends Model {}

Wydarzenie_has_Sponsor.init(
	{
		Wydarzenie_id_wydarzenie: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Wydarzenie,
				key: "id_wydarzenie",
			},
		},
		Sponsor_id_sponsor: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			references: {
				model: Sponsor,
				key: "id_sponsor",
			},
		},
	},
	{
		sequelize,
		modelName: "Wydarzenie_has_Sponsor",
		tableName: "Wydarzenie_has_Sponsor",
		timestamps: false,
	}
)

Wydarzenie_has_Sponsor.belongsTo(Wydarzenie, {
	foreignKey: "Wydarzenie_id_wydarzenie",
})
Wydarzenie_has_Sponsor.belongsTo(Sponsor, { foreignKey: "Sponsor_id_sponsor" })

module.exports = Wydarzenie_has_Sponsor
