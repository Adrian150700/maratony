const { Wydarzenie } = require('../models');

exports.createWydarzenie = async (req, res) => {
  try {
    const wydarzenie = await Wydarzenie.create(req.body);
    res.status(201).json(wydarzenie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWydarzenia = async (req, res) => {
  try {
    const wydarzenia = await Wydarzenie.findAll();
    res.status(200).json(wydarzenia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWydarzenie = async (req, res) => {
  try {
    const wydarzenie = await Wydarzenie.findByPk(req.params.id);
    if (wydarzenie) {
      res.status(200).json(wydarzenie);
    } else {
      res.status(404).json({ error: 'Wydarzenie not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateWydarzenie = async (req, res) => {
  try {
    const [updated] = await Wydarzenie.update(req.body, {
      where: { id_wydarzenie: req.params.id }
    });
    if (updated) {
      const updatedWydarzenie = await Wydarzenie.findByPk(req.params.id);
      res.status(200).json(updatedWydarzenie);
    } else {
      res.status(404).json({ error: 'Wydarzenie not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWydarzenie = async (req, res) => {
  try {
    const deleted = await Wydarzenie.destroy({
      where: { id_wydarzenie: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Wydarzenie not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
