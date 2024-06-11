const { Punkt_kontrolny } = require("../models")

exports.createPunktKontrolny = async (req, res) => {
	try {
		const newPunktKontrolny = await Punkt_kontrolny.create(req.body)
		res.status(201).send(newPunktKontrolny)
	} catch (error) {
		res.status(400).send({ message: error.message })
	}
}
