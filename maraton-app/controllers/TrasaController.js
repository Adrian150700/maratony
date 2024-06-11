const { Trasa } = require('../models');

exports.createTrasa = async (req, res) => {
  try {
    const trasa = await Trasa.create(req.body);
    res.status(201).json(trasa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrasy = async (req, res) => {
  try {
    const trasy = await Trasa.findAll();
    res.status(200).json(trasy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrasa = async (req, res) => {
  try {
    const trasa = await Trasa.findByPk(req.params.id);
    if (trasa) {
      res.status(200).json(trasa);
    } else {
      res.status(404).json({ error: 'Trasa not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTrasa = async (req, res) => {
  try {
    const [updated] = await Trasa.update(req.body, {
      where: { id_trasa: req.params.id }
    });
    if (updated) {
      const updatedTrasa = await Trasa.findByPk(req.params.id);
      res.status(200).json(updatedTrasa);
    } else {
      res.status(404).json({ error: 'Trasa not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTrasa = async (req, res) => {
  try {
    const deleted = await Trasa.destroy({
      where: { id_trasa: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Trasa not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
