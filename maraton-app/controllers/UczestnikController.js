const { Uczestnik } = require('../models');

exports.createUczestnik = async (req, res) => {
  try {
    const uczestnik = await Uczestnik.create(req.body);
    res.status(201).json(uczestnik);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUczestnicy = async (req, res) => {
  try {
    const uczestnicy = await Uczestnik.findAll();
    res.status(200).json(uczestnicy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUczestnik = async (req, res) => {
  try {
    const uczestnik = await Uczestnik.findByPk(req.params.id);
    if (uczestnik) {
      res.status(200).json(uczestnik);
    } else {
      res.status(404).json({ error: 'Uczestnik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUczestnik = async (req, res) => {
  try {
    const [updated] = await Uczestnik.update(req.body, {
      where: { id_uczestnik: req.params.id }
    });
    if (updated) {
      const updatedUczestnik = await Uczestnik.findByPk(req.params.id);
      res.status(200).json(updatedUczestnik);
    } else {
      res.status(404).json({ error: 'Uczestnik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUczestnik = async (req, res) => {
  try {
    const deleted = await Uczestnik.destroy({
      where: { id_uczestnik: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Uczestnik not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
