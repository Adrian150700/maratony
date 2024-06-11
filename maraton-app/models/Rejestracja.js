const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Uczestnik = require("./Uczestnik")
const Wydarzenie = require("./Wydarzenie")
const Płatność = require("./Płatność")

class Rejestracja extends Model {}

Rejestracja.init(
	{
		id_rejestracja: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		data_rejestracji: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		status_rejestracji: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Uczestnik_id_uczestnik: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Uczestnik,
				key: "id_uczestnik",
			},
		},
		Uczestnik_Adres_id_adres: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Uczestnik,
				key: "Adres_id_adres1",
			},
		},
		Wydarzenie_id_wydarzenie: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Wydarzenie,
				key: "id_wydarzenie",
			},
		},
		Płatność_id_płatność: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Płatność,
				key: "id_płatność",
			},
		},
	},
	{
		sequelize,
		modelName: "Rejestracja",
		tableName: "Rejestracja",
		timestamps: false,
	}
)

Rejestracja.belongsTo(Uczestnik, { foreignKey: "Uczestnik_id_uczestnik" })
Rejestracja.belongsTo(Wydarzenie, { foreignKey: "Wydarzenie_id_wydarzenie" })
Rejestracja.belongsTo(Płatność, { foreignKey: "Płatność_id_płatność" })

module.exports = Rejestracja
