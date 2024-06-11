const { Punkt_kontrolny } = require('../models');

exports.createPunktKontrolny = async (req, res) => {
  try {
    const punktKontrolny = await Punkt_kontrolny.create(req.body);
    res.status(201).json(punktKontrolny);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPunktyKontrolne = async (req, res) => {
  try {
    const punktyKontrolne = await Punkt_kontrolny.findAll();
    res.status(200).json(punktyKontrolne);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPunktKontrolny = async (req, res) => {
  try {
    const punktKontrolny = await Punkt_kontrolny.findByPk(req.params.id);
    if (punktKontrolny) {
      res.status(200).json(punktKontrolny);
    } else {
      res.status(404).json({ error: 'Punkt kontrolny not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePunktKontrolny = async (req, res) => {
  try {
    const [updated] = await Punkt_kontrolny.update(req.body, {
      where: { id_punkt: req.params.id }
    });
    if (updated) {
      const updatedPunktKontrolny = await Punkt_kontrolny.findByPk(req.params.id);
      res.status(200).json(updatedPunktKontrolny);
    } else {
      res.status(404).json({ error: 'Punkt kontrolny not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePunktKontrolny = async (req, res) => {
  try {
    const deleted = await Punkt_kontrolny.destroy({
      where: { id_punkt: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Punkt kontrolny not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
