const { Trasa } = require('../models');

exports.createTrasa = async (req, res) => {
    try {
        const newTrasa = await Trasa.create(req.body);
        res.status(201).send(newTrasa);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};
