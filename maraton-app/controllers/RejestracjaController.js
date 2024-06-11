const { Rejestracja } = require('../models');

exports.createRejestracja = async (req, res) => {
  try {
    const rejestracja = await Rejestracja.create(req.body);
    res.status(201).json(rejestracja);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRejestracje = async (req, res) => {
  try {
    const rejestracje = await Rejestracja.findAll();
    res.status(200).json(rejestracje);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRejestracja = async (req, res) => {
  try {
    const rejestracja = await Rejestracja.findByPk(req.params.id);
    if (rejestracja) {
      res.status(200).json(rejestracja);
    } else {
      res.status(404).json({ error: 'Rejestracja not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateRejestracja = async (req, res) => {
  try {
    const [updated] = await Rejestracja.update(req.body, {
      where: { id_rejestracja: req.params.id }
    });
    if (updated) {
      const updatedRejestracja = await Rejestracja.findByPk(req.params.id);
      res.status(200).json(updatedRejestracja);
    } else {
      res.status(404).json({ error: 'Rejestracja not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRejestracja = async (req, res) => {
  try {
    const deleted = await Rejestracja.destroy({
      where: { id_rejestracja: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Rejestracja not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
