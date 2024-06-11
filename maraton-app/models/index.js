const sequelize = require("../config/database")
const Adres = require("./Adres")
const Uczestnik = require("./Uczestnik")
const Użytkownik = require("./Użytkownik")
const Trasa = require("./Trasa")
const Wydarzenie = require("./Wydarzenie")
const Płatność = require("./Płatność")
const Rejestracja = require("./Rejestracja")
const Punkt_kontrolny = require("./Punkt_kontrolny")
const Trasa_has_Punkt_kontrolny = require("./Trasa_has_Punkt_kontrolny")
const Organizator = require("./Organizator")
const Wydarzenie_has_Organizator = require("./Wydarzenie_has_Organizator")
const Sponsor = require("./Sponsor")
const Wydarzenie_has_Sponsor = require("./Wydarzenie_has_Sponsor")
const Wyniki = require("./Wyniki")

// Definiowanie relacji
Uczestnik.belongsTo(Adres, { foreignKey: "Adres_id_adres1" })
Użytkownik.belongsTo(Uczestnik, { foreignKey: "Uczestnik_id_uczestnik" })
Wydarzenie.belongsTo(Trasa, { foreignKey: "Trasa_id_trasa" })
Rejestracja.belongsTo(Uczestnik, { foreignKey: "Uczestnik_id_uczestnik" })
Rejestracja.belongsTo(Wydarzenie, { foreignKey: "Wydarzenie_id_wydarzenie" })
Rejestracja.belongsTo(Płatność, { foreignKey: "Płatność_id_płatność" })
Trasa_has_Punkt_kontrolny.belongsTo(Trasa, { foreignKey: "Trasa_id_trasa" })
Trasa_has_Punkt_kontrolny.belongsTo(Punkt_kontrolny, {
	foreignKey: "Punkt_kontrolny_id_punkt",
})
Organizator.belongsTo(Adres, { foreignKey: "Adres_id_adres" })
Wydarzenie_has_Organizator.belongsTo(Wydarzenie, {
	foreignKey: "Wydarzenie_id_wydarzenie",
})
Wydarzenie_has_Organizator.belongsTo(Organizator, {
	foreignKey: "Organizator_id_organizator",
})
Sponsor.belongsTo(Adres, { foreignKey: "Adres_id_adres" })
Wydarzenie_has_Sponsor.belongsTo(Wydarzenie, {
	foreignKey: "Wydarzenie_id_wydarzenie",
})
Wydarzenie_has_Sponsor.belongsTo(Sponsor, { foreignKey: "Sponsor_id_sponsor" })
Wyniki.belongsTo(Wydarzenie, { foreignKey: "Wydarzenie_id_wydarzenie" })
Wyniki.belongsTo(Uczestnik, { foreignKey: "Uczestnik_id_uczestnik" })

sequelize
	.sync()
	.then(() => {
		console.log("Database synchronized")
	})
	.catch(err => {
		console.error("Error synchronizing database:", err)
	})

module.exports = {
	Adres,
	Uczestnik,
	Użytkownik,
	Trasa,
	Wydarzenie,
	Płatność,
	Rejestracja,
	Punkt_kontrolny,
	Trasa_has_Punkt_kontrolny,
	Organizator,
	Wydarzenie_has_Organizator,
	Sponsor,
	Wydarzenie_has_Sponsor,
	Wyniki,
}
