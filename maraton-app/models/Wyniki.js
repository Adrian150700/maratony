const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Wydarzenie = require("./Wydarzenie")
const Uczestnik = require("./Uczestnik")

class Wyniki extends Model {}

Wyniki.init(
	{
		id_wyniki: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		czas: {
			type: DataTypes.TIME,
			allowNull: true,
		},
		miejsce: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		przebyty_dystans: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		Wydarzenie_id_wydarzenie: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Wydarzenie,
				key: "id_wydarzenie",
			},
		},
		Uczestnik_id_uczestnik: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Uczestnik,
				key: "id_uczestnik",
			},
		},
	},
	{
		sequelize,
		modelName: "Wyniki",
		tableName: "Wyniki",
		timestamps: false,
	}
)

Wyniki.belongsTo(Wydarzenie, { foreignKey: "Wydarzenie_id_wydarzenie" })
Wyniki.belongsTo(Uczestnik, { foreignKey: "Uczestnik_id_uczestnik" })

module.exports = Wyniki
