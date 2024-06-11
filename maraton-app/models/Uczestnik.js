const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Adres = require("./Adres")

class Uczestnik extends Model {}

Uczestnik.init(
	{
		id_uczestnik: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		Imię: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Nazwisko: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Wiek: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		PESEL: {
			type: DataTypes.BIGINT,
			allowNull: true,
		},
		Płeć: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Adres_id_adres1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: Adres,
				key: "id_adres",
			},
		},
		rozmiar_koszulki: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: "Uczestnik",
		tableName: "Uczestnik",
		timestamps: false,
	}
)

Uczestnik.belongsTo(Adres, { foreignKey: "Adres_id_adres1" })

module.exports = Uczestnik
