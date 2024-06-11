const Wydarzenie = require("../models/Wydarzenie")

// Tworzenie wydarzenia
exports.createWydarzenie = async (req, res) => {
	try {
		console.log("Received data:", req.body)
		const {
			nazwa_wydarzenia,
			data_wydarzenia,
			lokalizacja_wydarzenia,
			typ_wydarzenia,
			Trasa_id_trasa,
		} = req.body
		const newWydarzenie = await Wydarzenie.create({
			nazwa_wydarzenia,
			data_wydarzenia,
			lokalizacja_wydarzenia,
			typ_wydarzenia,
			Trasa_id_trasa,
		})
		res.status(201).send(newWydarzenie)
	} catch (error) {
		console.error("Error creating Wydarzenie:", error)
		res.status(400).send({ message: error.message })
	}
}
// Odczytywanie wszystkich wydarzeń
exports.getAllWydarzenia = async (req, res) => {
	try {
		const wydarzenia = await Wydarzenie.findAll()
		res.status(200).send(wydarzenia)
	} catch (error) {
		res.status(500).send(error)
	}
}

// Odczytywanie pojedynczego wydarzenia
exports.getWydarzenieById = async (req, res) => {
	try {
		const wydarzenie = await Wydarzenie.findByPk(req.params.id)
		if (!wydarzenie) {
			return res.status(404).send({ message: "Wydarzenie not found!" })
		}
		res.status(200).send(wydarzenie)
	} catch (error) {
		res.status(500).send(error)
	}
}

// Aktualizowanie wydarzenia
exports.updateWydarzenie = async (req, res) => {
	try {
		const { id } = req.params
		const updated = await Wydarzenie.update(req.body, {
			where: { id_wydarzenie: id },
		})
		if (updated[0] === 0) {
			return res.status(404).send({ message: "Wydarzenie not found!" })
		}
		const updatedWydarzenie = await Wydarzenie.findByPk(id)
		res.status(200).send(updatedWydarzenie)
	} catch (error) {
		res.status(400).send(error)
	}
}

// Usuwanie wydarzenia
exports.deleteWydarzenie = async (req, res) => {
	try {
		const { id } = req.params
		const deleted = await Wydarzenie.destroy({
			where: { id_wydarzenie: id },
		})
		if (deleted === 0) {
			return res.status(404).send({ message: "Wydarzenie not found!" })
		}
		res.status(204).send()
	} catch (error) {
		res.status(500).send(error)
	}
}
