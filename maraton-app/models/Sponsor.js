const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Adres = require("./Adres")

class Sponsor extends Model {}

Sponsor.init(
	{
		id_sponsor: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nazwa_sponsora: {
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
		modelName: "Sponsor",
		tableName: "Sponsor",
		timestamps: false,
	}
)

Sponsor.belongsTo(Adres, { foreignKey: "Adres_id_adres" })

module.exports = Sponsor
